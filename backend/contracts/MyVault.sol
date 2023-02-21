//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;
import "./../node_modules/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./../node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./../node_modules/@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "./../node_modules/@uniswap/v3-periphery/contracts/interfaces/IQuoter.sol";
import "./../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./libraries/console.sol";
import "./../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interface/IGMXController.sol";
import "./interface/gmx/IGMXVault.sol";

///Arbitrum project
contract MyVault is Ownable, ERC20 {
    // ::::::::::::: VARIABLE AND EVENT ::::::::::::: //
    address public GMX_controller;
    address public WETH = 0x82aF49447D8a07e3bd95BD0d56f35241523fBab1;
    address public USDC = 0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8;
    address public gmxVault = 0x489ee077994B6658eAfA855C308275EAd8097C4A;
    uint256 public netAssetValue;
    uint8 public exposition; //0 neutral - 1 Long ETH - 2 short ETH
    uint8 public fees;
    bool isInit;
    mapping(address => bool) public tokenAccepted;
    event NewTokenAdded(address tokenAddress);
    event TokenRemoved(address tokenAddress);
    event expoEvent(uint256 when, uint8 oldexpo, uint8 newexpo);
    event depositEvent(
        address indexed account,
        uint256 when,
        address token_deposited,
        uint256 amount,
        uint256 PLPissued
    );
    event withdrawEvent(
        address indexed account,
        uint256 when,
        uint256 amount,
        uint256 nav,
        uint256 preop_supply
    );
    event navEvent(
        uint256 when,
        uint8 exposition,
        uint256 oldNAV,
        uint256 NAV,
        uint256 usdcNAV,
        uint256 longNAV,
        uint256 shortNAV,
        uint256 totalsupply
    );


    // ::::::::::::: CONSTRUCTOR ::::::::::::: //
    constructor() ERC20("Polyplus", "PLP") {
        exposition = 0;
        netAssetValue = 1;
        isInit = false;
    }
    modifier isInitialized() {
        require(
            isInit == true,
            "Not initialized, first you have to set GMX controller"
        );
        _;
    }

    // ::::::::::::: HANDLING TOKEN LISTS ACCEPTED ::::::::::::: //

    //Gestion des tokens acceptés [until now stable only with USDC]
    /// @notice whitelist the token accepted in the vault, allow a better control
    /// @dev until now, only USDC deposit are handled
    /// @param tokenAddress arbitrum address of the ERC20 token
    function acceptToken(address tokenAddress) external onlyOwner {
        require(!tokenAccepted[tokenAddress], "Token already added");
        tokenAccepted[tokenAddress] = true;
        emit NewTokenAdded(tokenAddress);
    }

    function removeToken(address tokenAddress) external onlyOwner {
        require(tokenAccepted[tokenAddress], "Token not yet added");
        tokenAccepted[tokenAddress] = false;
        emit TokenRemoved(tokenAddress);
    }

    function isAccepted(address tokenAddress) external view returns (bool) {
        return tokenAccepted[tokenAddress];
    }

    // ::::::::::::: GMX CONTROLLER ADN FEES::::::::::::: //
    /// @notice function that sets the exposition of the contract (Long Short or Neutral and rebalance assets accordingly)
    /// @dev only the owner can call this function
    /// @param _addr address of the controller to add
    function setGMX_controller(address _addr) external onlyOwner {
        GMX_controller = _addr;
        isInit = true;
    }

    function getGMX_controller() public view returns (address) {
        return GMX_controller;
    }

    // function setFees(uint8 _fees) external onlyOwner {
    //     fees = _fees;
    // }
    // function getFees() public returns(uint8) {
    //     return fees;
    // }

    // ::::::::::::: STRATEGY EXPOSITION AND GLOBAL TX ::::::::::::: //

    /// @notice function that sets the exposition of the contract (Long Short or Neutral and rebalance assets accordingly)
    /// @dev only the owner can call this function
    /// @param _exposition 0 for neutral | 1 Long | 2 Short
    function setExposition(uint8 _exposition) external onlyOwner {
        require(
            _exposition == 0 || _exposition == 1 || _exposition == 2,
            "Value must be 0 for neutral, 1 for Long or 2 for Short"
        );
        require(
            exposition != _exposition,
            "Reverted because exposition has not changed"
        );
        uint8 oldexposition = exposition;
        exposition = _exposition;
        emit expoEvent(block.timestamp, oldexposition, exposition);
    }

    function getExposition() external view returns (uint8) {
        return exposition;
    }

    function openPosition() external payable onlyOwner {
        bool isLong = (exposition == 1 ? true : false);
        IERC20(USDC).approve(
            GMX_controller,
            IERC20(USDC).balanceOf(address(this))
        );
        IGMXController(GMX_controller).increasePosition{value: msg.value}(
            IERC20(USDC).balanceOf(address(this)),
            isLong
        );
    }

    // function liquidatePositions() external payable onlyOwner {
    //     bool isLong = (exposition == 1 ? true : false);
    //     IGMXController(GMX_controller).liquidatePosition{value: msg.value}(
    //         isLong
    //     );
    // }
    function liquidateLongPositions() external payable onlyOwner {
        IGMXController(GMX_controller).liquidatePosition{value: msg.value}(
            true
        );
    }

    function liquidateShortPositions() external payable onlyOwner {
        IGMXController(GMX_controller).liquidatePosition{value: msg.value}(
            false
        );
    }

    // ::::::::::::: NET ASSET VALUE OF THE FUNDS ::::::::::::: //
    //NOT READY
    function updateNetAssetValue() external onlyOwner {
        _updateNAV();
    }

    //decimals 10**30
    function _updateNAV() private {
        uint256 oldNAV = netAssetValue;
        uint256 _deltavalueLong = 0;
        uint256 _deltavalueShort = 0;
        uint256 usdcBal = ERC20(USDC).balanceOf(address(this)) * 10**24; ///10**18 met USDC 6 decimals donc 10**12
        (, uint256 _collateralLong, , , , , , ) = IGMXVault(gmxVault)
            .getPosition(GMX_controller, WETH, WETH, true);
        if (_collateralLong > 0) {
            (, _deltavalueLong) = IGMXVault(gmxVault).getPositionDelta(
                GMX_controller,
                WETH,
                WETH,
                true
            );
        }
        uint256 posLong = (_collateralLong + _deltavalueLong);
        (, uint256 _collateralShort, , , , , , ) = IGMXVault(gmxVault)
            .getPosition(GMX_controller, USDC, WETH, false);
        if (_collateralShort > 0) {
            (, _deltavalueShort) = IGMXVault(gmxVault).getPositionDelta(
                GMX_controller,
                USDC,
                WETH,
                false
            );
        }
        uint256 posShort = (_collateralShort - _deltavalueShort);
        netAssetValue = usdcBal + posLong + posShort;
        emit navEvent(
            block.timestamp,
            exposition,
            oldNAV,
            netAssetValue,
            usdcBal,
            posLong,
            posShort,
            this.totalSupply()
        );
    }

    function getNetAssetValue() external view returns (uint256) {
        return netAssetValue;
    }

    // ::::::::::::: USER INTERFACE ::::::::::::: //

    /// @notice function for depositing ana ccepted token on the vault
    /// token address to deposit [to implement later]
    function deposit(address tokenAddress, uint256 _amount) external payable {
        require(tokenAccepted[tokenAddress], "Token not yet supported");
        require(_amount > 0, "Amount to deposit is mandatory");
        // require(msg.value > ,"");
        uint256 amountToken = _amount - _amount / 100; //1% entry fees paid to GMX [0.1% entry fees + 0.8% swap fees]
        uint256 amountPLPToken;
        console.log("Deposit");
        console.log("Amount :", _amount);
        console.log("Nav before operation :", netAssetValue);
        if (this.totalSupply() == 0) {
            amountPLPToken = _amount * (10**12); //10**18 / 10**6 decimals PLP / decimals USDC
        } else {
            _updateNAV();
            if (exposition == 0) {
                amountPLPToken = (((10**24) * _amount * this.totalSupply()) /
                    netAssetValue);
            } else {
                amountPLPToken = (((10**24) *
                    amountToken *
                    this.totalSupply()) / netAssetValue); //10**30 decimals net asset value / 10**6 USDC
            }
        }
        console.log("Nav updated:", netAssetValue);
        console.log("TS :", this.totalSupply());
        console.log("PLP :", amountPLPToken);
        console.log("Amount token :", amountToken);
        _mint(msg.sender, amountPLPToken);
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount);
        IERC20(tokenAddress).approve(GMX_controller, _amount);
        if (exposition == 1) {
            IGMXController(GMX_controller).increasePosition{value: msg.value}(
                _amount,
                true
            );
        } else if (exposition == 2) {
            IGMXController(GMX_controller).increasePosition{value: msg.value}(
                _amount,
                false
            );
        }
        emit depositEvent(
            msg.sender,
            block.timestamp,
            tokenAddress,
            _amount,
            amountPLPToken
        );
    }

    function withdraw(uint256 _amount) external payable {
        require(_amount > 0);
        require(
            this.balanceOf(msg.sender) >= _amount,
            "Surprisingly you cannot withdraw token you have not bought"
        );
        bool isLong = (exposition == 1 ? true : false);
        console.log("Withdraw");
        console.log("Amount :", _amount);
        console.log("Nav before update:", netAssetValue);
        _updateNAV();
        console.log("Nav :", netAssetValue);
        console.log("TS :", this.totalSupply());
        uint256 preop_supply = this.totalSupply();
        _burn(msg.sender, _amount);
        
        if (exposition == 0) {
            console.log("retrait :", (10**6*_amount *netAssetValue)/(preop_supply*10**30));
            IERC20(USDC).transfer(msg.sender,(10**6*_amount *netAssetValue)/(preop_supply*10**30));
        } else {
            console.log("retrait :", (99*10**4*_amount *netAssetValue)/(preop_supply*10**30));
            IGMXController(GMX_controller).decreasePosition{value: msg.value}(
                msg.sender,
                (99*10**4*_amount *netAssetValue)/(preop_supply*10**30), // [decimals USDC] * (#PLP / [decimals PLP]) * (NAV / [decimals NAV]) * ([decimals TS] / TS)) | 99% pour prendre en compte l'effet dillutif des frais GMX à la sortie
                isLong
            );
        } 
        emit withdrawEvent(msg.sender, block.timestamp, _amount, netAssetValue, preop_supply);
    }
}

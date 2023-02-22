//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


interface IGMXController {
    function increasePosition(uint256 tokenAmount, bool isLong) external payable ; 
    function decreasePosition(address _to, uint256 tokenAmount, bool isLong) external payable ; 
    function liquidatePosition(bool isLong) external payable ; 
}

interface IGMXVault {
    function getPosition(address _account, address _collateralToken, address _indexToken, bool _isLong) external returns (uint256 size, uint256 collateral, uint256 averagePrice, uint256 entryFundingRate, uint256 reserveAmount, uint256 realisedPnl, bool realisedPnLPositive, uint256 lastIncreasedTime);
    function getMaxPrice(address _token) external view returns (uint256);
    function getMinPrice(address _token) external view returns (uint256);
    function getPositionDelta(address _account, address _collateralToken, address _indexToken, bool _isLong) external returns (bool hasprofit, uint256 lastIncreasedTime);
}

/// @title Vault contract to receive funds and rebalance on GMX thanks to controller according to exposition strategy
/// @author Vigimani
/// @notice It works as a fund manager, send token as shares of the vault according to the value in it, send back USDC when token are given back
/// @dev Improvement to do :
/// @dev Add fees to compensate for transaction fees paid when position need to be modified
/// @dev Allow other token to be added
/// @custom:experimental This is an experimental contract.
contract MyVault is Ownable, ERC20, ReentrancyGuard {
    // ::::::::::::: VARIABLE AND EVENT ::::::::::::: //
    address public GMX_controller;
    address public WETH = 0x82aF49447D8a07e3bd95BD0d56f35241523fBab1;
    address public USDC = 0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8;
    address public gmxVault = 0x489ee077994B6658eAfA855C308275EAd8097C4A;
    uint256 public netAssetValue;
    uint8 public exposition; //0 neutral - 1 Long ETH - 2 short ETH

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

    // ::::::::::::: GMX CONTROLLER AND FEES::::::::::::: //

    /// @notice function that sets the exposition of the contract (Long Short or Neutral and rebalance assets accordingly)
    /// @dev only the owner can call this function
    /// @param _addr address of the controller to add
    function setGMX_controller(address _addr) external onlyOwner {
        GMX_controller = _addr;
    }
    function getGMX_controller() public view returns (address) {
        return GMX_controller;
    }

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

    /// @notice Function that handles the deposit of fund in USDC and sent back PLP token 
    /// @dev take USDC and send back PLP according to current vault value and price per share;
    /// @param tokenAddress USDC address only for the moment, but keeping the possibility to add other token
    /// @param _amount amount of USDC decimals 10**6
    function deposit(address tokenAddress, uint256 _amount) external payable nonReentrant {
        require(tokenAccepted[tokenAddress], "Token not yet supported");
        require(_amount > 0, "Amount to deposit is mandatory");
        uint256 amountToken = _amount - _amount / 100; //1% entry fees paid to GMX [0.1% entry fees + 0.8% swap fees]
        uint256 amountPLPToken;
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

    /// @notice Function to withdraw funds from the vault
    /// @notice Function that handles the withdraw of fund
    /// @dev take PLP and send back USDC according to current price per share;
    /// @param _amount amount of PLP decimals 10**18
    function withdraw(uint256 _amount) external payable nonReentrant {
        require(_amount > 0);
        require(
            this.balanceOf(msg.sender) >= _amount,
            "Surprisingly you cannot withdraw token you have not bought"
        );
        bool isLong = (exposition == 1 ? true : false);
        _updateNAV();
        uint256 preop_supply = this.totalSupply();
        _burn(msg.sender, _amount);
        
        if (exposition == 0) {
            IERC20(USDC).transfer(msg.sender,(10**6*_amount *netAssetValue)/(preop_supply*10**30));
        } else {
            IGMXController(GMX_controller).decreasePosition{value: msg.value}(
                msg.sender,
                (99*10**4*_amount *netAssetValue)/(preop_supply*10**30), // [decimals USDC] * (#PLP / [decimals PLP]) * (NAV / [decimals NAV]) * ([decimals TS] / TS)) | 99% pour prendre en compte l'effet dillutif des frais GMX à la sortie
                isLong
            );
        } 
        emit withdrawEvent(msg.sender, block.timestamp, _amount, netAssetValue, preop_supply);
    }
}

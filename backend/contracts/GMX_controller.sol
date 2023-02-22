// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "./../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./../node_modules/@openzeppelin/contracts/access/Ownable.sol";

interface IGMXReader {
    function getPositions(address _vault, address _account, address[] memory _collateralTokens, address[] memory _indexTokens, bool[] memory _isLong) external ;
}
interface IGMXVault {
    function getPosition(address _account, address _collateralToken, address _indexToken, bool _isLong) external returns (uint256 size, uint256 collateral, uint256 averagePrice, uint256 entryFundingRate, uint256 reserveAmount, uint256 realisedPnl, bool realisedPnLPositive, uint256 lastIncreasedTime);
    function getMaxPrice(address _token) external view returns (uint256);
    function getMinPrice(address _token) external view returns (uint256);
    function getPositionDelta(address _account, address _collateralToken, address _indexToken, bool _isLong) external returns (bool hasprofit, uint256 lastIncreasedTime);
}
interface IGMXRouter {
    function approvePlugin(address _plugin) external;
    function increasePosition(address _account, address _collateralToken, address _indexToken, uint256 _sizeDelta, bool _isLong) external payable ;
}
interface IGMXPositionRouter {
    function createIncreasePosition(address[] memory _path, address _indexToken, uint256 _amountIn, uint256 _minOut, uint256 _sizeDelta, bool _isLong, uint256 _acceptablePrice, uint256 _executionFee, bytes32 _referralCode, address _callbackTarget) external payable;
    function createDecreasePosition(address[] memory _path, address _indexToken, uint256 _collateralDelta, uint256 _sizeDelta, bool _isLong, address _receiver, uint256 _acceptablePrice, uint256 _minOut, uint256 _executionFee, bool _withdrawETH, address _callbackTarget) external payable;
    function minExecutionFee() external view returns (uint256);
}


/// @title Contract controlled by the vault that interacts with GMX perpetual exchange on Arbitrum network 
/// @author Vigimani
/// @notice This contract should work with any vault on Arbitrum network
/// @dev Improvement to do :
/// @dev Allow not only USDC and create functions to handle tokens authorized 
/// @dev Allow to modify leverage 
/// @dev See if oracle price works better on mainnet
/// @custom:experimental This is an experimental contract.
contract GMX_controller is Ownable {
    address public gmxVault =0x489ee077994B6658eAfA855C308275EAd8097C4A;
    address public gmxRouter =0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064;
    address public gmxPositionRouter =0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868;
    address public WETH = 0x82aF49447D8a07e3bd95BD0d56f35241523fBab1;
    address public USDC = 0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8;
    uint256 public GMXexecutionFee ;
    address public vault;

    constructor(address _vault) {
        vault = _vault;
        IGMXRouter(gmxRouter).approvePlugin(gmxPositionRouter);
        GMXexecutionFee = IGMXPositionRouter(gmxPositionRouter).minExecutionFee();
    }

    modifier onlyMyVault {
        require(msg.sender == vault, "Not vault");
        _;
    }
    function setVaultOwner(address _addr) external onlyOwner {
        vault=_addr;
    }
    function getVaultOwner() public view returns(address) {
        return vault;
    }
    function setGMXexecutionFees(uint256 _newFees) external onlyOwner{
        GMXexecutionFee = _newFees;
    }
    function getGMXexecutionFees() public view returns(uint256) {
        return GMXexecutionFee;
    }

    /// @notice Increase positions on GMX - only the vault can call this function
    /// @dev USDC only -> see if on public net better to use oracle -> // (,int price,,,) = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419).latestRoundData();
    /// @param tokenAmount amount to withdraw in USDC [10**6]
    /// @param isLong true for Long, False for Short
    function increasePosition(uint256 tokenAmount, bool isLong) external payable onlyMyVault{
        IERC20(USDC).transferFrom(vault, address(this), tokenAmount);
        IERC20(USDC).approve(gmxRouter, tokenAmount);
        uint256 positionSize = ((tokenAmount * 1e24 * 110)/100); // 1.1x leverage 
        uint256 acceptablePrice = 0;
        if (isLong) {
            address[] memory path = new address[](2);//[2] because GMX has to convert USDC to WETH
            path[0] = USDC;
            path[1] = WETH;
            acceptablePrice = IGMXVault(gmxVault).getMaxPrice(WETH)*10030 / 10000;// GMX uses 30 bps tolerance
            IGMXPositionRouter(gmxPositionRouter).createIncreasePosition{value: msg.value}(
                path,
                WETH,
                tokenAmount,
                0,
                positionSize,
                isLong,
                acceptablePrice,
                GMXexecutionFee,
                0x6d79726566657272616c4d6176696e6967690000000000000000000000000000,
                address(0)
            );            
        } else {
            address[] memory path = new address[](1);
            path[0] = USDC;
            acceptablePrice = IGMXVault(gmxVault).getMinPrice(WETH)*9970/10000;// GMX uses 30 bps tolerance
            IGMXPositionRouter(gmxPositionRouter).createIncreasePosition{value: msg.value}(path, WETH, tokenAmount, 0, positionSize, isLong, acceptablePrice, GMXexecutionFee, 0x0, address(0));
        }
    }

    /// @notice Decrease positions on GMX - only the vault can call this function
    /// @dev USDC only -> see if on public net better to use oracle -> // (,int price,,,) = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419).latestRoundData();
    /// @param _to receiver of the funds 
    /// @param tokenAmount amount to withdraw in USDC [10**6]
    /// @param isLong true for Long, False for Short
    function decreasePosition(address _to, uint256 tokenAmount, bool isLong) external payable onlyMyVault {
        uint256 acceptablePrice = 0;
        uint256 collateralDelta = ((tokenAmount * 1e24 * 110) / 100);

        // uint256 collateralDelta = ((tokenAmount * 1e24 * 110) / 100) * (tokenAmount*1e24 +GMXexecutionFee*10**18)/(tokenAmount*1e24);
        if (isLong) {
            address[] memory path = new address[](2);//[2] because GMX has to convert WETH back in USDC
            path[0] = WETH;
            path[1] = USDC;
            acceptablePrice = IGMXVault(gmxVault).getMinPrice(WETH)*9970/10000;// 0.3% slippage
            IGMXPositionRouter(gmxPositionRouter).createDecreasePosition{value: msg.value}(path, WETH, tokenAmount* 1e24, collateralDelta, isLong, _to, acceptablePrice, 0, GMXexecutionFee, false, address(0));
        } else {
            address[] memory path = new address[](1);
            path[0] = USDC;
            acceptablePrice = IGMXVault(gmxVault).getMaxPrice(WETH)*10030/10000;// 0.3% slippage
            IGMXPositionRouter(gmxPositionRouter).createDecreasePosition{value: msg.value}(path, WETH, tokenAmount* 1e24, collateralDelta, isLong,  _to, acceptablePrice, 0, GMXexecutionFee, false, address(0));
        }
    }

    /// @notice Liquidates positions on GMX - only the vault can call this function
    /// @dev USDC only -> see if on public net better to use oracle -> // (,int price,,,) = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419).latestRoundData();
    /// @param isLong true for Long, False for Short
    function liquidatePosition(bool isLong) external payable onlyMyVault {
        uint256 acceptablePrice = 0;
        if (isLong) {
            address[] memory path = new address[](2); //[2] because GMX has to convert WETH back in USDC
            path[0] = WETH;
            path[1] = USDC;
            (uint256 sizeDelta,,,,,,,) = IGMXVault(gmxVault).getPosition(address(this), WETH, WETH, isLong);
            acceptablePrice = IGMXVault(gmxVault).getMinPrice(WETH)*9970/10000;// 0.3% slippage
            IGMXPositionRouter(gmxPositionRouter).createDecreasePosition{value: msg.value}(path, WETH, 0, sizeDelta, isLong, msg.sender, acceptablePrice, 0, GMXexecutionFee, false, address(0));
        } else {
            address[] memory path = new address[](1);
            path[0] = USDC;
            (uint256 sizeDelta,,,,,,,) = IGMXVault(gmxVault).getPosition(address(this), USDC, WETH, isLong);
            acceptablePrice = IGMXVault(gmxVault).getMaxPrice(WETH)*10030/10000;// 0.3% slippage
            IGMXPositionRouter(gmxPositionRouter).createDecreasePosition{value: msg.value}(path, WETH, 0, sizeDelta, isLong, msg.sender, acceptablePrice, 0, GMXexecutionFee, false, address(0));
        }
    }

}

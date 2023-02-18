const { Impersonate } = require("../test/@utils");
const { ABIS, ADDRESS } = require("../test/@config");
const { network, deployments, ethers } = require("hardhat");

const setKeeper = async () => {
  accounts = await ethers.getSigners();
  deployer = accounts[0];
  gmxAdmin = await Impersonate(ADDRESS.GMX_ADMIN_ACCOUNT); //to athorize a keepers for validating tx
  GMX_POSITION_ROUTER = await ethers.getContractAt(
    ABIS.GMX_POSITION_ROUTER,
    ADDRESS.GMX_POSITION_ROUTER,
    deployer
  );
  await GMX_POSITION_ROUTER.connect(gmxAdmin).setPositionKeeper(
    deployer.address,
    true
  );
};

const fundUsers = async () => {
  accounts = await ethers.getSigners();
  provider = await ethers.provider;
  whale = await Impersonate(ADDRESS.WHALE_USDC); //to fund hardhat account with real USDC
  USDC = await ethers.getContractAt(ABIS.ERC20, ADDRESS.USDC, deployer);

  deployer = accounts[0];
  user = accounts[1];
  user2 = accounts[2];
  user3 = accounts[3];

  await USDC.connect(whale).transfer(
    user.address,
    ethers.utils.parseUnits("10", "6").mul(10000), //10 000 USDC
    { gasLimit: 100000 }
  );
  await USDC.connect(whale).transfer(
    deployer.address,
    ethers.utils.parseUnits("10", "6").mul(1000), //10 000 USDC
    { gasLimit: 100000 }
  );
  await USDC.connect(whale).transfer(
    user2.address,
    ethers.utils.parseUnits("10", "6").mul(1000),
    { gasLimit: 100000 }
  );
  await USDC.connect(whale).transfer(
    user3.address,
    ethers.utils.parseUnits("10", "6").mul(100),
    { gasLimit: 100000 }
  );
};

module.exports = { setKeeper, fundUsers };

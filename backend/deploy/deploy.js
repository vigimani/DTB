const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
const { setKeeper, fundUsers } = require("../scripts/utils");
const { helpers } = require("@nomicfoundation/hardhat-network-helpers");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("--------------------------------------");
  arguments = [];
  const MyVault = await deploy("MyVault", {
    from: deployer,
    args: arguments,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  arguments = [MyVault.address];
  const GMX_controller = await deploy("GMX_controller", {
    from: deployer,
    args: arguments,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  //impersonate GMX admin to setup an account to validate transactions
  //impersonate USDC whale to funds accoutns
  if (network.name == "hardhat") {
    setKeeper();
    fundUsers();
  } 

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN) {
    log("Verifying...");
    await verify(MyVault.address, arguments);
    log("Verifying...");
    await verify(GMX_controller.address, arguments);
  }
};

module.exports.tags = ["all", "MyVault", "GMX_controller", "main"];

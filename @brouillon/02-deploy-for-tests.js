const { network } = require("hardhat");
const { developmentChains } = require("../backend/helper-hardhat-config");
const { verify } = require("../backend/utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("--------------------------------------");
  if (network.name == "hardhat") {
    await deployments.fixture(["MyVault"]);
    vault_contract = await ethers.getContract("MyVault");

    arguments = [vault_contract.address];
    const GMX_controller = await deploy("GMX_controller", {
      from: deployer,
      args: arguments,
      log: true,
      waitConfirmations: network.config.blockConfirmations || 1,
    });
  }
};

module.exports.tags = ["all", "GMX_controller", "main"];

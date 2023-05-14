// const { network } = require("hardhat"); // to get chainId from hardhat.config()
const {
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../helper-hardhat-configs");

module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts(); // Get namedAccounts from hre since I have require that in hardhat-config since I have to use deploy in terminal

  if (developmentChains.includes(network.name)) {
    const mockV3Aggregator = await deploy("MockV3Aggregator", {
      from: deployer, //
      args: [DECIMALS, INITIAL_ANSWER], // since constructor requires it
    });
    // console.log(mockV3Aggregator);
    console.log("Mock deployed...");
    console.log("______________________________________________");
  }
};

module.exports.tags = ["all", "mocks"]; // yarn hardhat deploy --tags mocks ----to deploy this script only

// error coming while compiling---increased solidity version to 0.6.6

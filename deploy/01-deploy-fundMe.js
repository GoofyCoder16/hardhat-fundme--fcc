const { network } = require("hardhat"); // to get chainId from hardhat.config()
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-configs");
const { verify } = require("../utils/verfiy");

// hre(hardhat runtime enviroment)----rather than using const require(hardhat)---use hre.functions----since hardhat-deploy-ethers added

// module.exports=async({hre})=>{
//     const {getNamedAccounts,deployments}=hre
// }

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts(); // Get namedAccounts from hre since I have require that in hardhat-config since I have to use deploy in terminal
  const chainId = network.config.chainId;
  let ethUsdPriceFeedAddress = "";
  if (developmentChains.includes(network.name)) {
    const mockV3Aggregator = await get("MockV3Aggregator");
    ethUsdPriceFeedAddress = mockV3Aggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["priceFeedAddress"];
  }
  const args = [ethUsdPriceFeedAddress];
  const fundMe = await deploy("FundMe", {
    from: deployer, //
    args: args, // since constructor requires it
    log: true, // Details of address at which deployed in console
    waitConfirmations: network.config.BlockConfirmations || 1,
  });
  // console.log(fundMe);
  console.log("fundme deployed...");
  verify(fundMe.address, args);
  console.log("______________________________________________");

  // for testing---deploying to a testnet is not a better option---test locally
  // Stil can't deploy, price converter requires contract in mainnet + deploying to diff testnet requires changing address of that contract ac to chain
  // => mocking--refactoring(changing) how solidity code works

  // Due to instaled hardhat-deploy module,"yarn hardhat node" auto run all scripts in deploy directory
};
module.exports.tags = ["all", "fundme"];

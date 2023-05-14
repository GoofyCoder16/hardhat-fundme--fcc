require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
GORELI_RPC_URL = process.env.GORELI_RPC_URL;
GORELI_PRIVATE_KEY = process.env.GORELI_PRIVATE_KEY;
ETHERSCAN_API = process.env.ETHERSCAN_API;
module.exports = {
  // solidity: "0.8.18",
  solidity: {
    compilers: [{ version: "0.8.18" }, { version: "0.6.6" }],
  },
  networks: {
    goreli: {
      url: GORELI_RPC_URL,
      accounts: [GORELI_PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
    },
    localhost: {
      // yarn hardhat node----runs hardhat enviroment provides accounts on localhost
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
    ganache: {
      url: "http://127.0.0.1:7545/", // due to wsl no need of changing sever + hardhat handles this time
      chainId: 1337, // chainid is 1337 not networkId
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
};

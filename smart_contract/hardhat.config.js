require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  mocha: {
    timeout: 3600000,
  },
  solidity: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 500,
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      chainId: 1337
    },
    mantle: {
      url: `https://rpc.testnet.mantle.xyz`, 
      accounts: [process.env.PRIVATE_KEY]
    },
    mumbai: {
      url: `https://api.zan.top/node/v1/polygon/mumbai/public`, 
      accounts: [process.env.PRIVATE_KEY]
    },
    scrollSepolia: {
      url: `https://sepolia-rpc.scroll.io`, 
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  etherscan: {
    apiKey: {
      scrollSepolia: 'abc',
    },
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://sepolia-blockscout.scroll.io/api',
          browserURL: 'https://sepolia-blockscout.scroll.io/',
        },
      },
    ],
  },
};

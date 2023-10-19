const hre = require("hardhat");
const fs = require('fs');

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const contract  = await hre.ethers.deployContract("Minter", );
  const contractAddress = await contract.getAddress();
  console.log("Minter1 address:", contractAddress);

  fs.writeFileSync('./config2.js', `
  export const scrollAddress = "${contractAddress}"
`);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();

const { ethers, getNamedAccounts } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const Fundme = await ethers.getContract("Fundme", deployer);
  console.log(`Got contract Fundme at ${Fundme.address}`);
  console.log("Withdrawing from contract...");
  const transactionResponse = await Fundme.withdraw();
  await transactionResponse.wait();
  console.log("Got it back!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

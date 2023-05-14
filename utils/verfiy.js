// to stop copying same code everywhere

const { run } = require("hardhat");
async function verify(contractAddress, args) {
  console.log("Verifying..");
  try {
    // as can throw error if same verified again
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    // etherscan error as
    if (e.message.toLowerCase().includes("Already verified.")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
}
module.exports = { verify };

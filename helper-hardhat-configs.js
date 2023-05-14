const networkConfig = {
  5: {
    name: "goreli",
    priceFeedAddress: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  },
  137: {
    name: "",
    priceFeedAddress: "",
  },
  // 31377
};
const developmentChains = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000;
module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
};

/*

module.exports={}
=>  const module=require() const r=module.f1()
module.exports={f1} 
=>  const r=require()

*/

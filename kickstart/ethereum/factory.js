import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xE2615ef2895a2DBB6fBe24894C38BAc97D12149B"
);

export default instance;

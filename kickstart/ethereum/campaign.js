import web3 from "./web3";
import CampaignJSON from "./build/Campaign.json";

const Campaign = (address) => {
  return new web3.eth.Contract(CampaignJSON.abi, address);
};

export default Campaign;

import web3 from "./web3";
import CampaignJSON from "./build/Campaign.json";

const Campaign = (address) => {
  return new web3.eth.Contract(JSON.parse(CampaignJSON.interface), address);
};

export default Campaign;

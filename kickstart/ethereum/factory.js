import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1ce8fe20e3377fa6fad61ba7114C12cdc1D3d118"
);

export default instance;

import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xF016233Ab5b474d060acf1B156828904E7Cc7024'
);

export default instance;

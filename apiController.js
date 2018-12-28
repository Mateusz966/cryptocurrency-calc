import data from './data/apiResponse.json';


export default function apiResponse (coinName, hashrate) {
  let coinInfo = [];
  let result;
  coinInfo = data;
  result = coinInfo.find(x => x.name === coinName);
  return result;
};


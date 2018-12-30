import data from './data/apiResponse.json';

const kwhUSD = 0.13;

export default function apiResponse (coinName, hashrate, wattPower) {
  let coinInfo = [];
  let result;
  let profitPerDay;

  coinInfo = data;
  // Search in json user cryptocurrency
  result = coinInfo.find(x => x.name === coinName);
  //  From json get profit in hour
  profitPerDay = result.revenueInDayUSD;

  if (result) {
    result = JSON.stringify(result);
  }
  else {
    result = 'nic tu nie ma';
  }
  return calcProfit(profitPerDay, Number(wattPower));
};


const calcProfit = (profit, wattPower) => {
  let arrCalcValue= [];
  let energyCost;

  energyCost = (24 * wattPower) / 1000;
  energyCost = energyCost * kwhUSD;
  arrCalcValue.push(energyCost);
  arrCalcValue.push(profit);

  return JSON.stringify(arrCalcValue);
}
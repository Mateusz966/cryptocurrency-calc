try {
  var data = require('./data/apiResponse.json');
} catch (error) {
  console.log(error);
}

const kwhUSD = 0.13;

export const apiResponse = (coinName, hashrate, wattPower) => {

  let cryptocurrencyInfo = [];
  let result;
  let profitPerDay;

  cryptocurrencyInfo = data;
  // Search in json cryptocurrency
  result = cryptocurrencyInfo.find(x => x.name === coinName);
  // From json get profit in day without energy cost and with default hashrate
  profitPerDay = result.revenueInDayUSD;

  if (result) {
    result = JSON.stringify(result);
  }
  else {
    result = 'nic tu nie ma';
  }

  profitPerDay = calcProfit(profitPerDay, Number(wattPower), hashrate);

  return outputData(Number(profitPerDay));

};


const calcProfit = (profit, wattPower, hashrate) => {

  let energyCost;
  let profitPerDay;
  const oneDay = 24;

  energyCost = (oneDay * wattPower) / 1000;
  energyCost = energyCost * kwhUSD;

  // Calc profit per day with user hashrate and energy cost
  profitPerDay = (profit * hashrate) - energyCost;

  return formatValue(Number(profitPerDay));

};


const formatValue = (value) => {

  return value.toFixed(3);

};

const outputData = (value) => {

  const data = {
    profitPerDay: value,
    profitPerMonth: value * 30,
    profitPerYear: value * 365
  };

  return data;

};
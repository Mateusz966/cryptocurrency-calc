import fs from 'fs';

let dataFromApi;

fs.readFile('data/apiResponse.json', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  dataFromApi = JSON.parse(data);
});


const kwhUSD = 0.13;

const outputData = (value = 0) => {
  // format value to 3 places after dot
  const formatValue = Number(value.toFixed(3));

  const data = {
    profitPerDay: formatValue,
    profitPerMonth: formatValue * 30,
    profitPerYear: formatValue * 365,
  };

  return data;
};

const calcProfit = (profit = 0, wattPower = 0, hashrate = 0) => {
  let energyCost;
  const oneDay = 24;

  energyCost = (oneDay * wattPower) / 1000;
  energyCost *= kwhUSD;

  // Calc profit per day with user hashrate and energy cost
  const profitPerDay = (profit * hashrate) - energyCost;

  return profitPerDay;
};


// eslint-disable-next-line import/prefer-default-export
export const apiResponse = (cryptocurrencyName = '', hashrate = 0, wattPower = 0) => {
  let result;
  let profitPerDay = 0;

  // Search in json cryptocurrency
  result = dataFromApi.find(x => x.name === cryptocurrencyName);
  // From json get profit in day without energy cost and with default hashrate
  profitPerDay = result.revenueInDayUSD;

  if (result) {
    result = JSON.stringify(result);
  } else {
    result = 'nic tu nie ma';
  }

  profitPerDay = calcProfit(profitPerDay, wattPower, hashrate);

  return outputData(profitPerDay);
};

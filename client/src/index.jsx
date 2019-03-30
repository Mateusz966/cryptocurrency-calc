/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import ShowProfitability from './show-profitability.js';
import Form from './form.js';


const showProfit = (profit) => {
  const jsonProfit = JSON.parse(profit);
  console.log(jsonProfit);
};

const handleRequestToServer = () => {
  const url = '/calc-value';

  const data = {
    cryptocurrency: '',
    hashrate: 0,
    powerConsuming: 0,
  };

  const cryptocurrency = document.querySelector('#cryptocurrency').value;
  const hashrate = document.querySelector('#hashrate').value;
  const powerConsuming = document.querySelector('#powerConsuming').value;

  data.cryptocurrency = cryptocurrency;
  data.hashrate = hashrate;
  data.powerConsuming = powerConsuming;

  const req = new XMLHttpRequest();

  req.open('POST', url, true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      showProfit(req.response);
    } else {
      console.log(req.readyState, req.status);
    }
  };

  req.send(JSON.stringify(data));
};

function App() {
  return (
    <React.Fragment>
      <Form handleRequestToServer={handleRequestToServer} />
      <ShowProfitability />
    </React.Fragment>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
);

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import ShowProfitability from './show-profitability.js';
import Form from './form.js';

let state = {
  profitPerDay: 0,
  profitPerMonth: 0,
  profitPerYear: 0,
};

function render() {
  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  );
}

const handleRequestToServer = () => {
  const url = '/calc-value';

  let data = {
    cryptocurrency: '',
    hashrate: 0,
    powerConsuming: 0,
  };

  const cryptocurrency = document.querySelector('#cryptocurrency').value;
  const hashrate = document.querySelector('#hashrate').value;
  const powerConsuming = document.querySelector('#powerConsuming').value;

  data = { cryptocurrency, hashrate, powerConsuming };

  const req = new XMLHttpRequest();

  req.open('POST', url, true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      state = JSON.parse(req.response);
      render();
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
      <ShowProfitability {...state} />
    </React.Fragment>
  );
}

render();

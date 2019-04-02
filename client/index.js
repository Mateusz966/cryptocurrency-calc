/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import ShowProfitability from './show-profitability.js';
import Form from './form.js';

var state = {
  profitPerDay: 0,
  profitPerMonth: 0,
  profitPerYear: 0
};

function render() {
  ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
}

var handleRequestToServer = function handleRequestToServer() {
  var url = '/calc-value';

  var data = {
    cryptocurrency: '',
    hashrate: 0,
    powerConsuming: 0
  };

  var cryptocurrency = document.querySelector('#cryptocurrency').value;
  var hashrate = document.querySelector('#hashrate').value;
  var powerConsuming = document.querySelector('#powerConsuming').value;

  data = { cryptocurrency: cryptocurrency, hashrate: hashrate, powerConsuming: powerConsuming };

  var req = new XMLHttpRequest();

  req.open('POST', url, true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.onreadystatechange = function () {
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
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Form, { handleRequestToServer: handleRequestToServer }),
    React.createElement(ShowProfitability, state)
  );
}

render();
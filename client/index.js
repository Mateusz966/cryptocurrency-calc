/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import ShowProfitability from './show-profitability';
import Form from './form';

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Form, null),
    React.createElement(ShowProfitability, null)
  );
}

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
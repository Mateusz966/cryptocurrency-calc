/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import ShowProfitability from './show-profitability';
import Form from './form';

function App() {
  return (
    <React.Fragment>
      <Form />
      <ShowProfitability />
    </React.Fragment>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
);

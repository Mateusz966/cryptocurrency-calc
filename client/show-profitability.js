/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

function ShowProfitability(_ref) {
  var profitPerDay = _ref.profitPerDay,
      profitPerMonth = _ref.profitPerMonth,
      profitPerYear = _ref.profitPerYear;

  return React.createElement(
    'div',
    { className: 'calc row ' + (profitPerDay > 0 ? 'positive' : 'negative') },
    'Dzie\u0144 $' + profitPerDay + ' Miesi\u0105c $' + profitPerMonth + ' Rok $' + profitPerYear,
    React.createElement(SingleProfitabilityBox, null)
  );
}

function SingleProfitabilityBox(props) {
  return React.createElement(
    'div',
    { className: 'wrapper' },
    React.createElement(
      'span',
      { className: 'heading' },
      'Zarobek w przeci\u0105gu:'
    ),
    React.createElement(
      'p',
      null,
      'zarobek'
    )
  );
}

export default ShowProfitability;
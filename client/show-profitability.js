/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

function ShowProfitability(props) {
  return React.createElement(
    "div",
    { className: "calc row" },
    React.createElement(SingleProfitabilityBox, null)
  );
}

function SingleProfitabilityBox(props) {
  return React.createElement(
    "div",
    { className: "wrapper" },
    React.createElement(
      "span",
      { className: "heading" },
      "Zarobek w przeci\u0105gu:"
    ),
    React.createElement(
      "p",
      null,
      "zarobek"
    )
  );
}

export default ShowProfitability;
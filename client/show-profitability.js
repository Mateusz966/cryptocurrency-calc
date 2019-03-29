/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

function ShowProfitability(props) {
  return React.createElement(SingleProfitabilityBox, null);
}

function SingleProfitabilityBox(props) {
  return React.createElement(
    "div",
    { className: "wrapper" },
    React.createElement(
      "span",
      { className: "heading" },
      "Zarobek w"
    ),
    React.createElement(
      "p",
      null,
      "zarobek"
    )
  );
}

export default ShowProfitability;
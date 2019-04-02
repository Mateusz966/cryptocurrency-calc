/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

function ShowProfitability({ profitPerDay, profitPerMonth, profitPerYear }) {
  return (
    <div className={`calc row ${(profitPerDay > 0) ? 'positive' : 'negative'}`}>
      {`Dzień $${profitPerDay} Miesiąc $${profitPerMonth} Rok $${profitPerYear}`}
      <SingleProfitabilityBox />
    </div>
  );
}

function SingleProfitabilityBox(props) {
  return (
    <div className="wrapper">
      <span className="heading">
        Zarobek w przeciągu:
      </span>
      <p>
        zarobek
      </p>
    </div>
  );
}

export default ShowProfitability;

/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="form-wrapper">
        <input id="cryptocurrency" name="cryptocurrency" type="text" placeholder="Nazwa kryptowaluty" />
        <input id="hashrate" name="hashrate" type="text" placeholder="hashrate w MH/s" />
        <input id="powerConsuming" name="powerConsuming" type="text" placeholder="Pobór energii przez koparkę" />
      </div>
    );
  }
}

export default Form;

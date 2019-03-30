/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptocurrency: '',
      hashrate: '',
      powerConsuming: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { cryptocurrency, hashrate, powerConsuming } = this.state;
    const { handleRequestToServer } = this.props;
    return (
      <div className="form-wrapper">
        <input id="cryptocurrency" name="cryptocurrency" value={cryptocurrency} onChange={(event) => { this.handleChange(event); handleRequestToServer(); }} type="text" placeholder="Nazwa kryptowaluty" />
        <input id="hashrate" name="hashrate" type="text" value={hashrate} onChange={(event) => { this.handleChange(event); handleRequestToServer(); }} placeholder="hashrate w MH/s" />
        <input id="powerConsuming" name="powerConsuming" value={powerConsuming} onChange={(event) => { this.handleChange(event); handleRequestToServer(); }} type="text" placeholder="Pobór energii przez koparkę" />
      </div>
    );
  }
}

export default Form;

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
    this.handleRequestToServer = this.handleRequestToServer.bind(this);
  }

  handleRequestToServer(event) {
    console.log(event);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { cryptocurrency, hashrate, powerConsuming } = this.state;
    return (
      <div className="form-wrapper">
        <input id="cryptocurrency" name="cryptocurrency" value={cryptocurrency} onChange={ (event) => { this.handleChange(event); this.handleRequestToServer(event); }} type="text" placeholder="Nazwa kryptowaluty" />
        <input id="hashrate" name="hashrate" type="text" value={hashrate} onChange={this.handleChange} placeholder="hashrate w MH/s" />
        <input id="powerConsuming" name="powerConsuming" value={powerConsuming} onChange={this.handleChange} type="text" placeholder="Pobór energii przez koparkę" />
      </div>
    );
  }
}

export default Form;

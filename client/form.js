var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      cryptocurrency: '',
      hashrate: '',
      powerConsuming: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          cryptocurrency = _state.cryptocurrency,
          hashrate = _state.hashrate,
          powerConsuming = _state.powerConsuming;
      var handleRequestToServer = this.props.handleRequestToServer;

      return React.createElement(
        'div',
        { className: 'form-wrapper' },
        React.createElement('input', { id: 'cryptocurrency', name: 'cryptocurrency', value: cryptocurrency, onChange: function onChange(event) {
            _this2.handleChange(event);handleRequestToServer();
          }, type: 'text', placeholder: 'Nazwa kryptowaluty' }),
        React.createElement('input', { id: 'hashrate', name: 'hashrate', type: 'text', value: hashrate, onChange: function onChange(event) {
            _this2.handleChange(event);handleRequestToServer();
          }, placeholder: 'hashrate w MH/s' }),
        React.createElement('input', { id: 'powerConsuming', name: 'powerConsuming', value: powerConsuming, onChange: function onChange(event) {
            _this2.handleChange(event);handleRequestToServer();
          }, type: 'text', placeholder: 'Pob\xF3r energii przez kopark\u0119' })
      );
    }
  }]);

  return Form;
}(React.Component);

export default Form;
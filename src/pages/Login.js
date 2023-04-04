import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin, fetchCurrencies } from '../redux/actions';
import logo from '../logo.svg';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  enableButton = () => {
    const { email, password } = this.state;
    // const emailValidation = email.includes('@') && email.includes('.com');
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{3}$/g;
    const emailValidation = emailRegex.test(email);

    const minLength = 6;
    const passwordValidation = password.length >= minLength;

    if (emailValidation && passwordValidation) {
      this.setState(() => ({ isDisabled: false }));
    } else {
      this.setState(() => ({ isDisabled: true }));
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }), this.enableButton);
  };

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(userLogin(email));
    history.push('/carteira');
  };

  render() {
    const { email, isDisabled, password } = this.state;
    return (
      <main className="login-page">
        <div className="card">
          <img src={ logo } alt="trybewallet logo" />
          <label htmlFor="email-input">
            <input
              id="email-input"
              name="email"
              type="text"
              data-testid="email-input"
              placeholder="E-mail"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            <input
              id="password-input"
              name="password"
              type="password"
              data-testid="password-input"
              placeholder="Password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);

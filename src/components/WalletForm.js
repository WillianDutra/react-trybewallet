import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      // id: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      // exchangeRates: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { value, description, method, currency, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            name="value"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            name="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <select
          data-testid="currency-input"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
        >
          { currencies.map((ele, i) => (
            <option value={ ele } key={ i }>{ele}</option>
          ))}
        </select>
        <select
          data-testid="method-input"
          name="method"
          onChange={ this.handleChange }
          value={ method }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
  // expenses,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default connect(mapStateToProps)(WalletForm);

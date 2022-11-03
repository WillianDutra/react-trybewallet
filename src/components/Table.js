import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { totalExpense } from '../redux/actions';

class Table extends Component {
  componentDidUpdate() {
    this.setTotalExpense();
  }

  // --Faz a soma dos gastos-- //
  setTotalExpense = () => {
    const { expenses, dispatch } = this.props;
    if (expenses.length !== 0) {
      const allExpenses = expenses.map((ele) => {
        const { value, currency, exchangeRates } = ele;
        const askValue = exchangeRates[currency].ask;
        const sum = value * askValue;
        return Number(sum.toFixed(2));
      });
      const total = allExpenses.reduce((acc, curr) => acc + curr);
      dispatch((totalExpense(total)));
    }
  };
    // ------------------------- //

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses
            .map(({ id, value, currency, method, tag, description, exchangeRates }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real Brasileiro</td>
                <td>{}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  // currencies,
  expenses,
});

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default connect(mapStateToProps)(Table);

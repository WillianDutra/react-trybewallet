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
    return (
      <div>Table</div>
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

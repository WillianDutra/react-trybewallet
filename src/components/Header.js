import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpense } = this.props;
    return (
      <div id="header-infos">
        <p data-testid="email-field">{`Email: ${email}`}</p>
        <p data-testid="total-field">{totalExpense.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  totalExpense: wallet.totalExpense,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);

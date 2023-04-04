import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../logo.svg';
import emailIcon from '../styles/emailIcon.svg';
import despesasIcom from '../styles/despesasIcon.svg';

class Header extends Component {
  render() {
    const { email, totalExpense } = this.props;
    return (
      <div id="header-infos">
        <img src={ logo } alt="trybewallet logo" />
        <p data-testid="total-field" className="despesas">
          <img src={ despesasIcom } alt="despesas icon" />
          <strong>Total das despesas:</strong>
          {`${totalExpense.toFixed(2)} BRL`}
        </p>
        <p data-testid="email-field" className="email">
          <img src={ emailIcon } alt="email icon" />
          {email}
        </p>
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

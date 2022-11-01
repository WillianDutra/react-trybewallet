import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { renderWithRouter, renderWithRedux, renderWithRouterAndRedux } from './helpers/renderWith';
import store from '../redux/store';
import App from '../App';

describe('Página Wallet', () => {
  it('A tela de "Wallet" È renderizada corretamente', () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/carteira'] },
    );

    // Email de Login
    expect(screen.getByTestId('email-field')).toBeDefined();
    // Total das despesas
    expect(screen.getByTestId('total-field')).toBeDefined();
    // Moeda atual
    const currency = screen.getByTestId('header-currency-field');
    expect(currency).toBeDefined();
    expect(currency.innerHTML).toBe('BRL');
  });
  it('Os inputs do formulário são renderizados corretamente', () => {
  });
});

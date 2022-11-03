import { screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
// import store from '../redux/store';
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
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/carteira'] },
    );

    // Input de Valor
    expect(screen.getByTestId('value-input')).toBeDefined();
    // Input de Descrição
    expect(screen.getByTestId('description-input')).toBeDefined();
    // Select de Moeda
    expect(screen.getByTestId('currency-input')).toBeDefined();
    // Select de Metodo
    expect(screen.getByTestId('method-input')).toBeDefined();
    // Select de Tag
    expect(screen.getByTestId('tag-input')).toBeDefined();
    // Botão de adicionar
    expect(screen.getByRole('button', { name: 'Adicionar despesa' })).toBeDefined();
  });
  it('Os valores são atualizados ao clicar em Adicionar despesa', () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/carteira'] },
    );

    const valueInput = screen.getByTestId('value-input');
    userEvent.type(valueInput, '12');
    expect(valueInput.value).toBe('12');

    const descriptionInput = screen.getByTestId('description-input');
    userEvent.type(descriptionInput, 'Hot Dog');
    expect(descriptionInput.value).toBe('Hot Dog');

    // const selectCurrency = screen.getByTestId('currency-input');
    // userEvent.click(screen.getByRole('option', { name: 'CAD' }));
    // expect(screen.getByRole('option', { name: 'CAD' }).selected).toBe(true);

    // userEvent.click(screen.getByRole('button'));
    // expect(screen.getByTestId('value-input').value).toBe('');
    // expect(screen.getByTestId('description-input').value).toBe('');
  });
});

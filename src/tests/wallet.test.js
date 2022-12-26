import { screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
// import store from '../redux/store';
import App from '../App';
// import mockData from './helpers/mockData';

describe('Página Wallet', () => {
  const inputId = 'value-input';
  const descriptionId = 'description-input';

  it('A tela de "Wallet" È renderizada corretamente', () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/carteira'] },
    );

    expect(screen.getByTestId('email-field')).toBeDefined();
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

    expect(screen.getByTestId(inputId)).toBeDefined();
    expect(screen.getByTestId(descriptionId)).toBeDefined();
    expect(screen.getByTestId('currency-input')).toBeDefined();
    expect(screen.getByTestId('method-input')).toBeDefined();
    expect(screen.getByTestId('tag-input')).toBeDefined();
    expect(screen.getByRole('button', { name: 'Adicionar despesa' })).toBeDefined();
  });

  it('Os valores são atualizados ao clicar em Adicionar despesa', async () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/carteira'] },
    );

    const valueInput = screen.getByTestId(inputId);
    expect(valueInput.value).toBe('');
    userEvent.type(valueInput, '12');
    expect(valueInput.value).toBe('12');

    const descriptionInput = screen.getByTestId(descriptionId);
    expect(descriptionInput.value).toBe('');
    userEvent.type(descriptionInput, 'Hot Dog');
    expect(descriptionInput.value).toBe('Hot Dog');

    expect(screen.getByTestId('currency-input')).toBeDefined();
    expect(screen.findByRole('option', { name: 'USD' })).toBeDefined();
    expect(screen.findByRole('option', { name: 'CAD' })).toBeDefined();

    userEvent.click(screen.getByRole('button', { name: /adicionar despesa/i }));
    expect(screen.findByTestId(inputId).value).toBe(undefined);
    expect(screen.findByTestId(descriptionId).value).toBe(undefined);
  });
});

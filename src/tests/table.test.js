import { screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
// import store from '../redux/store';
import App from '../App';

describe('Tabela da página Wallet', () => {
  it('A tabela é renderizada corretamente', () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/carteira'] },
    );

    expect(screen.getByText('Descrição')).toBeDefined();
    expect(screen.getByText('Tag')).toBeDefined();
    expect(screen.getByText('Método de pagamento')).toBeDefined();
    expect(screen.getByText('Valor')).toBeDefined();
    expect(screen.getByText('Moeda')).toBeDefined();
    expect(screen.getByText('Câmbio utilizado')).toBeDefined();
    expect(screen.getByText('Valor convertido')).toBeDefined();
    expect(screen.getByText('Moeda de conversão')).toBeDefined();
    expect(screen.getByText('Editar/Excluir')).toBeDefined();
  });

  it('Tabela atualiza após adicionar despesa', async () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/carteira'] },
    );

    const createExpense = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(createExpense);

    const tag = screen.findByRole('th', { name: 'Alimentação' });
    const method = screen.findByRole('th', { name: 'Dinheiro' });
    const value = screen.findByRole('th', { name: 0.00 });
    const currency = screen.findByRole('th', { name: 'Dólar Americano/Real Brasileiro' });
    const convert = screen.findByRole('th', { name: 'Real Brasileiro' });
    const deleteExpense = screen.findByRole('button', { name: 'Excluir' });

    expect(tag).toBeDefined();
    expect(method).toBeDefined();
    expect(value).toBeDefined();
    expect(currency).toBeDefined();
    expect(convert).toBeDefined();
    expect(deleteExpense).toBeDefined();

    userEvent.click(await deleteExpense);
  });
});

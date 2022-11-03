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

  it('Tabela atualiza após adicionar despesa', () => {
    renderWithRouterAndRedux(
      <App />,
      { initialEntries: ['/carteira'] },
    );

    const createExpense = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(createExpense);

    // expect(screen.getByRole('button', { name: /excluir/i })).toBeDefined();
  });
});

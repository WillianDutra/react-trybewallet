import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './helpers/renderWith';
import store from '../redux/store';
import App from '../App';

describe('Página Login', () => {
  it('Tela inicial de "Login"', () => {
    const { history: { location: { pathname } } } = renderWithRouter(
      <Provider store={ store }>
        <App />
      </Provider>,
    );

    expect(pathname).toBe('/');

    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeDefined();

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeDefined();

    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeDefined();
  });
  it('Validação de email e senha', () => {
    renderWithRouter(
      <Provider store={ store }>
        <App />
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeDisabled();

    const emailInput = screen.getByTestId('email-input');
    userEvent.type(emailInput, 'willian@betrybe.com');
    expect(emailInput.value).toBe('willian@betrybe.com');

    const passwordInput = screen.getByTestId('password-input');
    userEvent.type(passwordInput, 'teste123');
    expect(passwordInput.value).toBe('teste123');

    expect(screen.getByRole('button')).not.toBeDisabled();
  });
});

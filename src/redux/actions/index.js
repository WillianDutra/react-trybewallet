// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';
export const TOTAL_EXPENSE = 'TOTAL_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const expenseCreate = (expense) => ({
  type: EXPENSE_CREATE,
  payload: expense,
});

export const totalExpense = (total) => ({
  type: TOTAL_EXPENSE,
  payload: total,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

// Request API

const requestStarted = () => ({
  type: REQUEST_API,
});

const requestFinished = (currencies) => ({
  type: RESPONSE_API,
  payload: currencies,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestStarted());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(requestFinished(currencies)));
};

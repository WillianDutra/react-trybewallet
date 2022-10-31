// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

const requestStarted = () => ({
  type: REQUEST_API,
});

const requestFinished = (coins) => ({
  type: RESPONSE_API,
  payload: coins,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestStarted());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((coins) => dispatch(requestFinished(coins)));
};

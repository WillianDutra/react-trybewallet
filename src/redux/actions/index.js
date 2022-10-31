// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

// const requestStarted = () => ({
//   type: REQUEST_API,
// });

export const fetchCoins = () => ({
  type: RESPONSE_API,
});

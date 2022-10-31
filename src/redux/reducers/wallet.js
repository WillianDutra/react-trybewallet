// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, RESPONSE_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case REQUEST_API:
    return { ...state, isLoading: true };
  case RESPONSE_API:
    return { ...state, isLoading: false, payload };
  default:
    return state;
  }
};

export default wallet;

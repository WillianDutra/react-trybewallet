// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, RESPONSE_API, EXPENSE_CREATE,
  TOTAL_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  totalExpense: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case REQUEST_API:
    return { ...state };
  case RESPONSE_API:
    return {
      ...state,
      currencies: (Object.keys(payload)).filter((ele) => ele !== 'USDT'),
    };
  case EXPENSE_CREATE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case TOTAL_EXPENSE:
    return {
      ...state,
      totalExpense: payload,
    };
  case REMOVE_EXPENSE:
    // const filteredExpenses = state.expenses.filter((ele) => ele.id !== payload);
    return {
      ...state,
      expenses: state.expenses.filter((ele) => ele.id !== payload),
    };
  default:
    return state;
  }
};

export default wallet;

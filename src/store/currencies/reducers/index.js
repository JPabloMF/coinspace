import types from '../actionTypes';

export const currenciesReducer = (
  state = { status: 'NOT_LOADED', data: {} },
  action
) => {
  switch (action.type) {
    case types.FETCH_CURRENCIES:
      return { ...state, action };

    default:
      return state;
  }
};

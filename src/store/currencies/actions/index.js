import types from '../actionTypes';

export const fetchCurrencies = () => ({ type: types.FETCH_CURRENCIES });
export const fetchCurrenciesRequest = data => ({
  type: types.FETCH_CURRENCIES_REQUEST,
  data
});
export const fetchCurrenciesSuccess = data => ({
  type: types.FETCH_CURRENCIES_SUCCESS,
  data
});
export const fetchCurrenciesFailed = data => ({
  type: types.FETCH_CURRENCIES_FAILED,
  data
});

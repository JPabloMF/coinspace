import types from '../actionTypes';

export const fetchSignIn = () => ({ type: types.FETCH_SIGNIN });
export const fetchSignInRequest = data => ({
  type: types.FETCH_SIGNIN_REQUEST,
  data
});
export const fetchSignInSuccess = data => ({
  type: types.FETCH_SIGNIN_SUCCESS,
  data
});
export const fetchSignInFailed = err => ({
  type: types.FETCH_SIGNIN_FAILED,
  err
});

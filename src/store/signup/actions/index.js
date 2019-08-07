import types from '../actionTypes';

export const fetchSignUp = () => ({ type: types.FETCH_SIGNUP });
export const fetchSignUpRequest = data => ({
  type: types.FETCH_SIGNUP_REQUEST,
  data
});
export const fetchSignUpSuccess = data => ({
  type: types.FETCH_SIGNUP_SUCCESS,
  data
});
export const fetchSignUpFailed = data => ({
  type: types.FETCH_SIGNUP_FAILED,
  data
});

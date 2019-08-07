import types from '../actionTypes';

export const signUpReducer = (
  state = { status: 'NOT_LOADED', data: {} },
  action
) => {
  switch (action.type) {
    case types.FETCH_SIGNUP:
      return {
        ...state,
        action
      };
    case types.FETCH_SIGNUP_REQUEST:
      return {
        ...state,
        action
      };
    case types.FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        action
      };
    case types.FETCH_SIGNUP_FAILED:
      return {
        ...state,
        action
      };
    default:
      return state;
  }
};

export default signUpReducer;

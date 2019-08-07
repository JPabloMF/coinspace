import types from '../actionTypes';

const signInReducer = (state = { status: 'NOT_LOADED', data: {} }, action) => {
  switch (action.type) {
    case types.FETCH_SIGNIN:
      return state;
    case types.FETCH_SIGNIN_REQUEST:
      return {
        ...state,
        action
      };
    case types.FETCH_SIGNIN_SUCCESS:
      return {
        ...state,
        action
      };
    case types.FETCH_SIGNIN_FAILED:
      return {
        ...state,
        action
      };
    default:
      return state;
  }
};

export default signInReducer;

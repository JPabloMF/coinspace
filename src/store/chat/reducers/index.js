import types from '../actionTypes';

const chatReducer = (state = { status: 'NOT_LOADED', data: {} }, action) => {
  switch (action.type) {
    case types.FETCH_CHAT:
      return state;
    case types.FETCH_CHAT_REQUEST:
      return {
        ...state,
        action
      };
    case types.FETCH_CHAT_SUCCESS:
      return {
        ...state,
        action
      };
    case types.FETCH_CHAT_FAILED:
      return {
        ...state,
        action
      };
    default:
      return state;
  }
};

export default chatReducer;

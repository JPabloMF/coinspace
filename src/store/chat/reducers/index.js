import types from '../actionTypes';

const chatReducer = (state = { status: 'NOT_LOADED', data: {} }, action) => {
  switch (action.type) {
    case types.FETCH_CHAT:
      return {
        ...state,
        action
      };
    default:
      return state;
  }
};

export default chatReducer;

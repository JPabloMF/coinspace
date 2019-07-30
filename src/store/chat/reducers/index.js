import types from '../actionTypes';

const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CHAT_FETCH_INITIAL:
      return {
        ...state,
        action
      };
    default:
      return state;
  }
};

export default chatReducer;

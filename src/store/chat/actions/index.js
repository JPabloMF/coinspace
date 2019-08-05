import types from '../actionTypes';

export const fetchChat = () => ({ type: types.FETCH_CHAT });
export const fetchChatRequest = data => ({
  type: types.FETCH_CHAT_REQUEST,
  data
});
export const fetchChatSuccess = data => ({
  type: types.FETCH_CHAT_SUCCESS,
  data
});
export const fetchChatFailed = err => ({ type: types.FETCH_CHAT_FAILED, err });

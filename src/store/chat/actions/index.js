import types from '../actionTypes';

export const fetchInitial = data => ({ type: types.CHAT_FETCH_INITIAL, data });
export const saveInitial = data => ({ type: types.CHAT_SAVE_INITIAL, data });
export const successInitial = () => ({ type: types.CHAT_SUCCESS_INITIAL });
export const failedInitial = err => ({ type: types.CHAT_FAILED_INITIAL, err });

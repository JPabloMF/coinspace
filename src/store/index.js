import { createStore, combineReducers } from 'redux';

import { REDUX_DEVTOOLS } from '../constants';

/* reducers */
import chatReducer from './chat/reducers';

const store = createStore(
  combineReducers({ chat: chatReducer }),
  REDUX_DEVTOOLS
);

export default store;

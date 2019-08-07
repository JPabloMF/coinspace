import { createStore, combineReducers } from 'redux';

import { REDUX_DEVTOOLS } from '../constants';

/* reducers */
import signInReducer from './signin/reducers';
import signUpReducer from './signup/reducers';

const store = createStore(
  combineReducers({ signIn: signInReducer, singUp: signUpReducer }),
  REDUX_DEVTOOLS
);

export default store;

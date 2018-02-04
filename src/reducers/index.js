import { combineReducers } from 'redux';
import pies from 'reducers/pies.js';
import stores from 'reducers/stores.js';

const rootReducer = combineReducers({
  pies,
  stores,
});

export default rootReducer;

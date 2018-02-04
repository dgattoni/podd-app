import { combineReducers } from 'redux';
import pies from 'reducers/pies.js';

const rootReducer = combineReducers({
  pies,
});

export default rootReducer;

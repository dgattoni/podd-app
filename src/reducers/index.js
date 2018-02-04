import { combineReducers } from 'redux';
import pies from 'reducers/pies.js';
import stores from 'reducers/stores.js';
import featuredPies from 'reducers/featuredPies.js';

const rootReducer = combineReducers({
  pies,
  stores,
  featuredPies,
});

export default rootReducer;

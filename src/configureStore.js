import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { routerMiddleware } from 'react-router-redux';
import reducer from 'reducers/index.js';

function configureStore() {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  const store = createStore(reducer, enhancer);

  return store;
}

export default configureStore;

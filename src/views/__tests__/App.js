import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducers/index.js';
import App from 'views/App.js';

describe('Views', () => {

  it('App view renders without crashing', () => {
    const div = document.createElement('div');
    const defaultState = {
      featuredPies: {
        items: [],
        isFetching: false,
        isFailure: false,
        page: 1,
        ascendingSort: true,
      },
    };
    const store = createStore(reducer, defaultState, applyMiddleware(thunk));
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

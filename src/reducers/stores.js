import { REQUEST_STORES, RECEIVE_STORES_SUCCESS, RECEIVE_STORES_ERROR } from 'actions/stores.js';

export default function stores(state = {}, action) {
  switch (action.type) {
    case REQUEST_STORES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STORES_SUCCESS:
      return Object.assign({}, state, {
        items: action.stores,
        isFetching: false
      });
    case RECEIVE_STORES_ERROR:
      return Object.assign({}, state, {
        isFailure: true
      });
    default:
      return state;
  }
}

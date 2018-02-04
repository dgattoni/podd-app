import { REQUEST_PIES, RECEIVE_PIES_SUCCESS, RECEIVE_PIES_ERROR } from 'actions/pies.js';

export default function pies(state = {}, action) {
  switch (action.type) {
    case REQUEST_PIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PIES_SUCCESS:
      return Object.assign({}, state, {
        items: action.pies,
        isFetching: false
      });
    case RECEIVE_PIES_ERROR:
      return Object.assign({}, state, {
        isFailure: true
      });
    default:
      return state;
  }
}

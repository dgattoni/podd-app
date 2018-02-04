import api from 'api';

export const REQUEST_STORES = 'REQUEST_STORES';
export const RECEIVE_STORES_SUCCESS = 'RECEIVE_STORES_SUCCESS';
export const RECEIVE_STORES_ERROR = 'RECEIVE_STORES_ERROR';

function requestStores() {
  return {
    type: REQUEST_STORES
  }
}

function receiveStores(stores) {
  return {
    type: RECEIVE_STORES_SUCCESS,
    stores
  }
}

function receiveStoresError(error) {
  return {
    type: RECEIVE_STORES_ERROR,
    error
  }
}

export function fetchStores() {
  return async (dispatch) => {
    try {
      dispatch(requestStores());
      const response = await api.get('/stores');
      dispatch(receiveStores(response.data));
    } catch (error) {
      dispatch(receiveStoresError(error));
    }
  }
}

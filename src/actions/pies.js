import api from 'api';

export const REQUEST_PIES = 'REQUEST_PIES';
export const RECEIVE_PIES_SUCCESS = 'RECEIVE_PIES_SUCCESS';
export const RECEIVE_PIES_ERROR = 'RECEIVE_PIES_ERROR';

function requestPies() {
  return {
    type: REQUEST_PIES
  }
}

function receivePies(pies) {
  return {
    type: RECEIVE_PIES_SUCCESS,
    pies
  }
}

function receivePiesError(error) {
  return {
    type: RECEIVE_PIES_ERROR,
    error
  }
}

export function fetchPies() {
  return async (dispatch) => {
    try {
      dispatch(requestPies());
      const response = await api.get('/pies');
      dispatch(receivePies(response.data));
    } catch (error) {
      dispatch(receivePiesError(error));
    }
  }
}

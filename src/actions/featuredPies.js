import api from 'api';

export const REQUEST_FEATURED_PIES = 'REQUEST_FEATURED_PIES';
export const RECEIVE_FEATURED_PIES_SUCCESS = 'RECEIVE_FEATURED_PIES_SUCCESS';
export const RECEIVE_FEATURED_PIES_ERROR = 'RECEIVE_FEATURED_PIES_ERROR';

function requestFeaturedPies() {
  return {
    type: REQUEST_FEATURED_PIES
  }
}

function receiveFeaturedPiesSuccess(featuredPies) {
  return {
    type: RECEIVE_FEATURED_PIES_SUCCESS,
    featuredPies
  }
}

function receiveFeaturedPiesError(error) {
  return {
    type: RECEIVE_FEATURED_PIES_ERROR,
    error
  }
}

export function fetchFeaturedPies() {
  return async (dispatch) => {
    try {
      dispatch(requestFeaturedPies());
      const response = await api.get('/stores?_embed=pies&_page=1&_limit=5');
      dispatch(receiveFeaturedPiesSuccess(response.data));
    } catch (error) {
      dispatch(receiveFeaturedPiesError(error));
    }
  }
}

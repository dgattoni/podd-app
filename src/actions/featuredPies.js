import api from 'api';

export const REQUEST_FEATURED_PIES = 'REQUEST_FEATURED_PIES';
export const RECEIVE_FEATURED_PIES_SUCCESS = 'RECEIVE_FEATURED_PIES_SUCCESS';
export const RECEIVE_FEATURED_PIES_ERROR = 'RECEIVE_FEATURED_PIES_ERROR';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const DECREMENT_PAGE = 'DECREMENT_PAGE';
export const SORT_PRICE = 'SORT_PRICE';
export const TOGGLE_SORT = 'TOGGLE_SORT';

const MAX_PER_PAGE = 5;

export function sortPrice(defaultSort) {
  return {
    type: SORT_PRICE,
    defaultSort
  }
}

export function incrementPage() {
  return {
    type: INCREMENT_PAGE
  }
}

export function decrementPage() {
  return {
    type: DECREMENT_PAGE
  }
}

function requestFeaturedPies(page, defaultSort) {
  return {
    type: REQUEST_FEATURED_PIES,
    page,
    defaultSort
  }
}

function receiveFeaturedPiesSuccess(featuredPies, defaultSort) {
  return {
    type: RECEIVE_FEATURED_PIES_SUCCESS,
    featuredPies,
    defaultSort
  }
}

function receiveFeaturedPiesError(error) {
  return {
    type: RECEIVE_FEATURED_PIES_ERROR,
    error
  }
}

function apiCallPromise(page, limit) {
  return api.get(`/stores?_embed=pies&_page=${page}&_limit=${limit}`);
}

export function fetchFeaturedPies() {
  return async (dispatch, getState) => {
    try {
      const { featuredPies: { page, defaultSort} } = getState();
      dispatch(requestFeaturedPies());
      const response = await apiCallPromise(page, MAX_PER_PAGE);
      dispatch(receiveFeaturedPiesSuccess(response.data, defaultSort));
    } catch (error) {
      dispatch(receiveFeaturedPiesError(error));
    }
  }
}

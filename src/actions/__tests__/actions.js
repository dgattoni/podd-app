import {
  TOGGLE_SORT,
  RECEIVE_FEATURED_PIES_SUCCESS,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  REQUEST_FEATURED_PIES,
  RECEIVE_FEATURED_PIES_ERROR,
  toggleSort,
  receiveFeaturedPiesSuccess,
  incrementPage,
  decrementPage,
  requestFeaturedPies,
  receiveFeaturedPiesError,
  apiCallPromise
} from 'actions/featuredPies.js';

describe('UI Action Creators', () => {
  it('should create an action to toggle price label', () => {
    const expectedAction = {
      type: 'TOGGLE_SORT'
    };
    expect(toggleSort()).toEqual(expectedAction);
  });

  it('should create an action to receive featured Pies', () => {
    const expectedAction = {
      type: 'RECEIVE_FEATURED_PIES_SUCCESS',
      featuredPies: [{store: 1}, {store: 2}, {store: 3}],
      ascendingSort: true
    };
    expect(receiveFeaturedPiesSuccess(
      [
        {store: 1},
        {store: 2},
        {store: 3}
      ], true))
      .toEqual(expectedAction);
  });

  it('should create an action to increment Page', () => {
    const expectedAction = {
      type: 'INCREMENT_PAGE'
    };
    expect(incrementPage()).toEqual(expectedAction);
  });

  it('should create an action to decrement Page', () => {
    const expectedAction = {
      type: 'DECREMENT_PAGE'
    };
    expect(decrementPage()).toEqual(expectedAction);
  });

  it('should create an action to request featured pies', () => {
    const expectedAction = {
      type: 'REQUEST_FEATURED_PIES'
    };
    expect(requestFeaturedPies()).toEqual(expectedAction);
  });

  it('should create an action to receive featured pies failiure', () => {
    const expectedAction = {
      type: 'RECEIVE_FEATURED_PIES_ERROR',
      error: new Error()
    };
    expect(receiveFeaturedPiesError(new Error())).toEqual(expectedAction);
  });
});

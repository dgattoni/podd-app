import {
  TOGGLE_SORT,
  RECEIVE_FEATURED_PIES_SUCCESS,
  toggleSort,
  receiveFeaturedPiesSuccess
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
    expect(receiveFeaturedPiesSuccess([{store: 1}, {store: 2}, {store: 3}], true)).toEqual(expectedAction);
  });
});

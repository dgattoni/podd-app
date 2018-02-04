import {
  REQUEST_FEATURED_PIES,
  RECEIVE_FEATURED_PIES_SUCCESS,
  RECEIVE_FEATURED_PIES_ERROR,
  INCREMENT_PAGE,
  DECREMENT_PAGE
} from 'actions/featuredPies.js';

function filterByIsPieOfTheDay(pies) {
  return pies.filter(pie => pie.isPieOfTheDay);
}

function filterStores(stores) {
  return stores.filter(store => store.pieOfTheDay.length > 0);
}

function mapStores(stores) {
  return stores.map(store => ({
    store: {
      id: store.id,
      displayName: store.displayName,
      address: store.address,
      rating: store.rating,
      mobile: store.mobile,
      city: store.city,
      state: store.state,
      postcode: store.postcode,
      coords: store.cords,
    },
    pieOfTheDay: filterByIsPieOfTheDay(store.pies),
  })
)};

export default function featuredPies(state = {}, action) {
  switch (action.type) {
    case REQUEST_FEATURED_PIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_FEATURED_PIES_SUCCESS:
      return Object.assign({}, state, {
        items: filterStores(mapStores(action.featuredPies)),
        isFetching: false
      });
    case RECEIVE_FEATURED_PIES_ERROR:
      return Object.assign({}, state, {
        isFailure: true
      });
    case INCREMENT_PAGE:
      return Object.assign({}, state, {
        page: state.page + 1
      });
    case DECREMENT_PAGE:
      if (state.page === 1) {
        return state;
      }
      return Object.assign({}, state, {
        page: state.page - 1
      });
    default:
      return state;
  }
}

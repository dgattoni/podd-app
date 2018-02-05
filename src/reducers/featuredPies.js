import {
  REQUEST_FEATURED_PIES,
  RECEIVE_FEATURED_PIES_SUCCESS,
  RECEIVE_FEATURED_PIES_ERROR,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  TOGGLE_SORT,
} from 'actions/featuredPies.js';

const filterStores = (stores) => (stores.filter(store => store.pieOfTheDay !== null));
const getFeaturedPie = (pies) => (pies.find(pie => pie.isPieOfTheDay) || null);
const sortPriceAsc = (a, b) => (a.pieOfTheDay.price - b.pieOfTheDay.price);
const sortPriceDesc = (a, b) => (b.pieOfTheDay.price - a.pieOfTheDay.price);

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
      coords: store.coords,
    },
    pieOfTheDay: getFeaturedPie(store.pies)
  })
)};

const toggleSort = (arr, isAscending) => (isAscending ?
  arr.sort(sortPriceAsc) : arr.sort(sortPriceDesc));

export default function featuredPies(state = {}, action) {
  switch (action.type) {
    case REQUEST_FEATURED_PIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_FEATURED_PIES_SUCCESS:
      const filteredData = filterStores(mapStores(action.featuredPies));
      return Object.assign({}, state, {
        items: toggleSort(filteredData, action.ascendingSort),
        isFetching: false,
      });
    case RECEIVE_FEATURED_PIES_ERROR:
      return Object.assign({}, state, {
        isFailure: true
      });
    case INCREMENT_PAGE:
      if (state.items.length === 0) {
        return state;
      }
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
    case TOGGLE_SORT:
      const isAscendingSort = !state.ascendingSort;
      const sortedItems = toggleSort([...state.items], isAscendingSort);
      return Object.assign({}, state, {
        items: sortedItems,
        ascendingSort: isAscendingSort,
      });
    default:
      return state;
  }
}

import { LOAD_PIES } from 'actions/pie.js';

export default function pie(state = [], action) {
  switch (action.type) {
    case LOAD_PIES:
      return state;
    default:
      return state;
  }
}

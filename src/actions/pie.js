/* PIE action creators */

export const LOAD_PIES = 'LOAD_PIES';

export function loadPies(filter) {
  return {
    type: LOAD_PIES,
    filter
  }
}

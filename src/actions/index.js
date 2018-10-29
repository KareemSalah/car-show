
export const FILTERS_CHANGED = 'FILTERS_CHANGED';

export function changeFilters(newFilters) {
  return {
    type: FILTERS_CHANGED,
    payload: newFilters
  }
}
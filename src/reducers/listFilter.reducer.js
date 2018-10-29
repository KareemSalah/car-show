import { FILTERS_CHANGED } from '../actions/index';
import * as _ from 'lodash';

export default function listFilters(state = { page: 1 }, action) {
  switch (action.type) {
    case FILTERS_CHANGED:
      let newState = _.cloneDeep(action.payload);
      if (!newState.page) {
        newState.page = 1;
      }
      return newState;
    default:
      return state;
  }
}
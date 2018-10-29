import { FILTERS_CHANGED } from '../actions/index';
import * as _ from 'lodash';

export default function listFilters(state = {}, action) {
  switch (action.type) {
    case FILTERS_CHANGED:
      let newState = _.cloneDeep(state);
      newState = _.merge(newState, action.payload);
      newState.page = 1;
      return newState;
    default:
      return state;
  }
}
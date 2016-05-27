'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const SORT_NAMES = 'SORT_NAMES';

export function sortNames(direction) {
  dispatcher.dispatch({
    type: SORT_NAMES,
    payload: direction ? 'desc' : 'asc'
  });
}

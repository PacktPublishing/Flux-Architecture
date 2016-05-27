'use strict'

import dispatcher from '../dispatcher';
import sortBy from 'lodash/sortBy';

// The action identifier...
export const FIRST = 'FIRST';

export function first() {

  // The payload data.
  let payload = [ 20, 10, 30 ];

  // Dispatches the "FIRST" action with
  // the payload sorted in ascending order.
  dispatcher.dispatch({
    type: FIRST,
    payload: sortBy(payload)
  });
}

'use strict'

import dispatcher from '../dispatcher';
import sortBy from 'lodash/sortBy';

// The action identifier...
export const SECOND = 'SECOND';

export function second() {

  // The payload data.
  let payload = [ 20, 10, 30 ];

  // Dispatches the action, with the
  // payload sorted in descending order.
  dispatcher.dispatch({
    type: SECOND,
    payload: sortBy(payload, x => x * -1)
  });
}

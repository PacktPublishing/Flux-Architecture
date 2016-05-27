'use strict'

import dispatcher from '../dispatcher';
import sortBy from 'lodash/sortBy';

// The action identifier...
export const THIRD = 'THIRD';

// Accepts a sort direction, but defaults
// to descending.
export function third(dir='desc') {

  // The payload data.
  let payload = [ 20, 10, 30 ];

  // The iteratee function that's passed
  // to "sortBy()".
  let iteratee;

  // Sets up the custom "iteratee" if we
  // want to sort in descending order.
  if (dir === 'desc') {
    iteratee = x => x * -1;
  }

  // Dispatches the action, sorting the payload
  // based on "dir".
  dispatcher.dispatch({
    type: THIRD,
    payload: sortBy(payload, iteratee)
  });
}

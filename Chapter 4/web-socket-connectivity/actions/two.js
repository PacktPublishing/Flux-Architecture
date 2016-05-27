'use strict';

import dispatcher from '../dispatcher';

// The action identifier...
export const TWO = 'two';

// Dispatches the action using the given payload.
export function two(payload) {
  dispatcher.dispatch({
    type: TWO,
    payload: payload
  });
}

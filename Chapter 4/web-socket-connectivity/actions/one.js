'use strict';

import dispatcher from '../dispatcher';

// The action identifier...
export const ONE = 'one';

// Dispatches the action using the given payload.
export function one(payload) {
  dispatcher.dispatch({
    type: ONE,
    payload: payload
  });
}

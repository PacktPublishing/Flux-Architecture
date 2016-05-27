'use strict';

import dispatcher from '../dispatcher';

// The action identifier...
export const THREE = 'three';

// Dispatches the action using the given payload.
export function three(payload) {
  dispatcher.dispatch({
    type: THREE,
    payload: payload
  });
}

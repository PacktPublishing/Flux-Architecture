'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const FIRST = 'FIRST';

// The action creator, the payload is
// parameterized.
export function first(checked=true) {
  dispatcher.dispatch({
    type: FIRST,
    payload: checked
  });
}

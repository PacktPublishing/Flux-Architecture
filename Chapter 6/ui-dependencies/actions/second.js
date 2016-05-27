'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const SECOND = 'SECOND';

// The action creator, the payload is
// parameterized.
export function second(checked=true) {
  dispatcher.dispatch({
    type: SECOND,
    payload: checked
  });
}

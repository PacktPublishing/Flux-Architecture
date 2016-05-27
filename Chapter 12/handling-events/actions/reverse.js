'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const REVERSE = 'REVERSE';

export function reverse() {
  dispatcher.dispatch({ type: REVERSE });
}

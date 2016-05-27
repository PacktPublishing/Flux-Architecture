'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const TOGGLE = 'TOGGLE';

export function toggle() {
  dispatcher.dispatch({ type: TOGGLE });
}

'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const MY_ACTION = 'MY_ACTION';

export function myAction() {
  dispatcher.dispatch({ type: MY_ACTION });
}

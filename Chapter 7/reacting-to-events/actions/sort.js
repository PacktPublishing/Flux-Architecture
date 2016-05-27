'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const SORT = 'SORT';

export function sort() {
  dispatcher.dispatch({ type: SORT });
}

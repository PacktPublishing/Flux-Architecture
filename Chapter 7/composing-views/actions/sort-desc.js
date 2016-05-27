'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const SORT_DESC = 'SORT_DESC';

export function sortDesc() {
  dispatcher.dispatch({ type: SORT_DESC });
}

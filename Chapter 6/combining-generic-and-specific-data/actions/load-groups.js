'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const LOAD_GROUPS = 'LOAD_GROUPS';

// Dispatches a "LOAD_GROUPS" action once the
// asynchronous data resolves.
export function loadGroups() {
  new Promise((resolve, reject) => {
    resolve([
      { id: 1, name: 'Group 1' },
      { id: 2, name: 'Group 2' }
    ]);
  }).then((groups) => {

    dispatcher.dispatch({
      type: LOAD_GROUPS,
      payload: groups
    });
  });
}

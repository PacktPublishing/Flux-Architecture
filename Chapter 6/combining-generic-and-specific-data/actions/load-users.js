'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const LOAD_USERS = 'LOAD_USERS';

// Dispatches a "LOAD_USERS" action once the
// asynchronous data has resolved.
export function loadUsers() {
  new Promise((resolve, reject) => {
    resolve([
      { group: 1, enabled: true, name: 'User 1' },
      { group: 2, enabled: false, name: 'User 2' },
      { group: 2, enabled: true, name: 'User 3' }
    ]);
  }).then((users) => {
    dispatcher.dispatch({
      type: LOAD_USERS,
      payload: users
    });
  });
}

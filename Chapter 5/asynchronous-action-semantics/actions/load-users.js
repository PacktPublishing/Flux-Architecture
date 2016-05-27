'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const LOAD_USERS = 'LOAD_USERS';

// Performs some asynchronous behavior, and once
// complete, dispatches the action.
export function loadUsers() {

  // Creates a new promise, intended to simulate
  // a call to some API function, which would likely
  // also return a promise.
  let api = new Promise((resolve, reject) => {

    // Resolves the promise with some data after half
    // a second.
    setTimeout(() => {
      resolve([
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' }
      ]);
    }, 500);
  });

  // When the promise resolves, the callback that's
  // passed to "then()" is called with the resolved
  // value. This is the payload that's dispatched.
  api.then((response) => {
    dispatcher.dispatch({
      type: LOAD_USERS,
      payload: response
    });
  });
}

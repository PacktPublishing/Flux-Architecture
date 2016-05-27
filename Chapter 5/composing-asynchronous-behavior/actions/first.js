'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const FIRST = 'FIRST';

// The API function that returns a promise that's
// resolved after 1.5 seconds.
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ first: 'First Name' });
    }, 1500);
  });
}

export function first() {

  // Returns a promise so that the caller
  // knows when the update round is complete,
  // regardless of the asynchronous behavior
  // that takes place before the action is dispatched.
  return new Promise((resolve, reject) => {
    api().then((response) => {

      // Action is dispatched after the asynchronous
      // value is resolved.
      dispatcher.dispatch({
        type: FIRST,
        payload: response
      });

      // Resolve the promise returned by "first()",
      // after the update round.
      resolve();
    });
  });
}

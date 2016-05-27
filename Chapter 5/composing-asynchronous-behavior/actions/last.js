'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const LAST = 'LAST';

// The API function that returns a promise that's
// resolved after 1.5 seconds.
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ last: 'Last Name' });
    }, 1000);
  });
}

export function last() {
  return new Promise((resolve, reject) => {
    api().then((response) => {
      dispatcher.dispatch({
        type: LAST,
        payload: response
      });

      resolve();
    });
  });
}

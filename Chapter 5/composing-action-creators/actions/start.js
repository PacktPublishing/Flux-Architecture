'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const START = 'START';

export function start() {

  // Simulate an async API call that starts
  // something. The promise resolves after
  // one second.
  let api = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });

  // Dispatches the action after the promise
  // has resolved.
  api.then((response) => {
    dispatcher.dispatch({ type: START });
  });
}

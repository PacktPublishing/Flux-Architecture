'use strict';

import dispatcher from '../dispatcher';

// The action identifier...
export const RUN_TASK = 'RUN_TASK';

// Uses "setTimeout()" to simulate latency we'd
// likely see in a real network request.
export function runTask() {
  setTimeout(() => {
    dispatcher.dispatch({
      type: RUN_TASK,

      // Highly-specific mock payload data. This
      // mock data doesn't necessarily have to
      // be hard-coded like this, but it does make
      // experimentation easy.
      payload: {
        id: 2,
        state: 'running'
      }
    });
  }, 1000);
}

'use strict';

import dispatcher from '../dispatcher';

export const SYNC = 'SYNC';

// Your typical synchronous action creator
// function. Dispatches an action with
// payload data.
export function syncFunc(payload) {
  dispatcher.dispatch({
    type: SYNC,
    payload
  });
}

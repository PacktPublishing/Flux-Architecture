'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const ADD = 'ADD';

// Dispatches the "ADD" action with the
// "payload" argument as the action payload.
export function add(payload) {
  dispatcher.dispatch({
    type: ADD,
    payload: payload
  });
}

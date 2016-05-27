'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const SELECT = 'SELECT';

export function select(payload) {
  dispatcher.dispatch({
    type: SELECT,
    payload: payload
  });
}

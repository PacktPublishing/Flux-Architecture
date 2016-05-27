'use strict'

import dispatcher from '../dispatcher';

// The action identifiers...
export const LIST_PUSH = 'LIST_PUSH';
export const LIST_CAPS = 'LIST_CAPS';

export function listPush(...payload) {
  dispatcher.dispatch({
    type: LIST_PUSH,
    payload: payload
  });
}

export function listCaps() {
  dispatcher.dispatch({ type: LIST_CAPS });
}

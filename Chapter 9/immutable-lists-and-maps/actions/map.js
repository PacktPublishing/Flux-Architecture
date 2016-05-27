'use strict'

import dispatcher from '../dispatcher';

// The action identifiers...
export const MAP_MERGE = 'MAP_MERGE';
export const MAP_INCR = 'MAP_INCR';

export function mapMerge(payload) {
  dispatcher.dispatch({
    type: MAP_MERGE,
    payload: payload
  });
}

export function mapIncr() {
  dispatcher.dispatch({ type: MAP_INCR });
}

'use strict'

import dispatcher from '../dispatcher';

// The action identifiers...
export const HIDE_ALL = 'HIDE_ALL';
export const HIDE_ODD = 'HIDE_ODD';

// The action creators...
export function hideAll() {
  dispatcher.dispatch({ type: HIDE_ALL });
}

export function hideOdd() {
  dispatcher.dispatch({ type: HIDE_ODD });
}

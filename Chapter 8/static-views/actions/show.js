'use strict'

import dispatcher from '../dispatcher';

// The action identifiers...
export const SHOW_CLASS = 'SHOW_CLASS';
export const SHOW_FUNCTION = 'SHOW_FUNCTION';

// Dispatches the "SHOW_CLASS" action...
export function showClass() {
  dispatcher.dispatch({ type: SHOW_CLASS });
}

// Dispatches the "SHOW_FUNCTION" action...
export function showFunction() {
  dispatcher.dispatch({ type: SHOW_FUNCTION });
}

'use strict'

import dispatcher from '../dispatcher';

// The action identifiers...
export const SHOW_USERS = 'SHOW_USERS';
export const SHOW_GROUPS = 'SHOW_GROUPS';

// The action creators...
export function showUsers() {
  dispatcher.dispatch({ type: SHOW_USERS });
}

export function showGroups() {
  dispatcher.dispatch({ type: SHOW_GROUPS });
}

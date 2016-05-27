'use strict';

import dispatcher from '../dispatcher';

// The action name.
export const SORT_USERS = 'SORT_USERS';

// This action creator function hard-codes
// the action payload.
export function sortUsers() {
  dispatcher.dispatch({
    type: SORT_USERS,
    payload: {
      direction: 'asc'
    }
  });
}

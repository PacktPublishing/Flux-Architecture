'use strict';

import { MOCK } from '../settings';
import dispatcher from '../dispatcher';

// The action identifier...
export const LOAD_USERS = 'LOAD_USERS';

// The mock implementation of the action creator.
function mockLoadUsers() {
  dispatcher.dispatch({
    type: LOAD_USERS,
    payload: [
      { id: 1, name: 'Mock 1' },
      { id: 2, name: 'Mock 2' }
    ]
  });
}

// The production implementation of the action creator.
function prodLoadUsers() {
  dispatcher.dispatch({
    type: LOAD_USERS,
    payload: [
      { id: 1, name: 'Prod 1' },
      { id: 2, name: 'Prod 2' }
    ]
  });
}

// Here's where the "loadUsers" value is determined, based
// on the "MOCK" setting. It's always going to be exported
// as "loadUsers", meaning that no other code needs to change.
const loadUsers = MOCK ? mockLoadUsers : prodLoadUsers;
export { loadUsers as loadUsers };

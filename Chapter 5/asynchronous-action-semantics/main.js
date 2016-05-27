'use strict';

import dispatcher from './dispatcher';
import { LOAD_USERS, loadUsers } from './actions/load-users';

// Logs the specific action payloads as
// they're dispatched.
dispatcher.register((e) => {
  switch(e.type) {
    case LOAD_USERS:
      console.log('users', e.payload.map(x => x.id));
      break;
  }
});

loadUsers();
// → users [1, 2, 3]

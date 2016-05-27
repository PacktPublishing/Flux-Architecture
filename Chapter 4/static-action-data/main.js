'use strict';

import dispatcher from './dispatcher';

// Gets the action constant and creator function
// for "SORT_USERS".
import {
  SORT_USERS,
  sortUsers
} from './actions/sort-users';

// Gets the action constant and creator function
// for "SORT_TASKS".
import {
  SORT_TASKS,
  sortTasks
} from './actions/sort-tasks';

// Listen for actions, and log some information
// depending on which action was dispatched.
// Note that we're using the action name constants
// here, so there's less chance of human error.
dispatcher.register((e) => {
  switch (e.type) {
    case SORT_USERS:
      console.log(`Sorting users "${e.payload.direction}"`);
      break;
    case SORT_TASKS:
      console.log(`Sorting tasks "${e.payload.direction}"`);
      break;
  }
});

sortUsers();
// → Sorting users "asc"

sortTasks();
// → Sorting tasks "asc"

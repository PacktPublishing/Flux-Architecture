'use strict';

import groupsStore from './stores/groups';
import usersStore from './stores/users';
import { loadGroups } from './actions/load-groups';
import { loadUsers } from './actions/load-users';

// Log the state of the "usersStore" to make
// sure that includes data from the generic
// "groupsStore"
usersStore.on('change', (state) => {
  state.forEach(({ name, groupName }) => {
    console.log(`${name} (${groupName})`);
  });
});

// We always load the generic data first. Especially
// if it doesn't change often.
loadGroups();
loadUsers();
// →
// User 1 (Group 1)
// User 3 (Group 2)

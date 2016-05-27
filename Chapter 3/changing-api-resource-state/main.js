'use strict';

import dispatcher from './dispatcher';
import userStore from './stores/user';
import userListStore from './stores/user-list';

// Intended to simulate a back-end API that changes
// state of something. In this case, it's creating
// a new resource. The returned promise will resolve
// with the new resource data.
function createUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        first: 'New',
        last: 'User'
      });
    }, 500);
  });
}

// Show the user when the "userStore" changes.
userStore.on('change', (state) => {
  console.log('changed', `"${state.first} ${state.last}"`);
});

// Show how many users there are when the "userListStore"
// changes.
userListStore.on('change', (state) => {
  console.log('users', state.length);
});

// Creates the back-end resource, then dispatches actions
// once the promise has resolved.
createUser().then((user) => {

  // The user has loaded, the "payload" is the resolved data.
  dispatcher.dispatch({
    type: 'USER_LOAD',
    payload: user
  });

  // Adds a user to the "userListStore", using the resolved
  // data.
  dispatcher.dispatch({
    type: 'USER_ADD',
    payload: user
  });

  // We can also remove the user. This impacts both stores.
  dispatcher.dispatch({
    type: 'USER_REMOVE',
    payload: 1
  });
});

'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import groups from './groups';
import { SHOW_USERS } from '../actions/show';

class Users extends EventEmitter {
  constructor() {
    super();

    // The default state of the "_users" state is
    // an array of user objects with references to
    // groups from another store.
    this.state = {
      _users: [
        { name: 'User 1', group: 1 },
        { name: 'User 2', group: 0 },
        { name: 'User 3', group: 1 }
      ]
    };

    // Sets the "users" state array, the state
    // that's actually used by views. See
    // "mapUsers()" below.
    this.mapUsers();

    this.id = dispatcher.register((e) => {
      let { state } = this;

      switch(e.type) {

        // If we're showing users, we need to "waitFor()"
        // the "groups" store because we depend on it.
        // Then we can use "mapUsers()" again.
        case SHOW_USERS:
          dispatcher.waitFor([ groups.id ]);

          this.mapUsers();

          this.emit('change', state);
          break;

        // The default action is to empty out
        // the "users" state so that the view
        // will delete the UI elements. However, the
        // "_users" state remains, so that other stores
        // that depend on this one can still access
        // the data.
        default:
          state.users = [];
          this.emit('change', state);
          break;
      }
    });
  }

  // Maps the "_users" state to the "users" state.
  // The idea being that the "users" array can be
  // emptied to update view displays while the "_users"
  // array remains intact for other stores to use.
  mapUsers() {
    this.state.users = this.state._users.map(user =>
      Object.assign({
        groupName: groups.state._groups[user.group]
      }, user)
    );
  }
}

export default new Users();

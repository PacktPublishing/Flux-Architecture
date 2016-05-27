'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

import { SHOW_USERS, SHOW_GROUPS } from '../actions/show';

class Radio extends EventEmitter {
  constructor() {
    super();

    // This store represents radio buttons for
    // the "users" and "groups" display. Each
    // is represented as an array so that we can
    // easily take the take the button out of
    // the view by emptying the array.
    this.state = {
      users: [{
        label: 'Users',
        checked: true
      }],
      groups: [{
        label: 'Groups',
        checked: false
      }]
    };

    this.id = dispatcher.register((e) => {

      // Easy access to the state properties
      // we need in this handler. See the two
      // getter methods below.
      let { users, groups } = this;

      switch(e.type) {

        // Mark the "users" display as "checked".
        case SHOW_USERS:
          users.checked = true;
          groups.checked = false;

          this.emit('change', this.state);
          break;

        // Mark the "groups" display as "checked".
        case SHOW_GROUPS:
          users.checked = false;
          groups.checked = true;

          this.emit('change', this.state);
          break;
      }
    });
  }

  // A shortcut for easy access to the "users" state.
  get users() {
    return this.state.users[0]
  }

  // A shortcut for easy access to the "groups" state.
  get groups() {
    return this.state.groups[0]
  }
}

export default new Radio();

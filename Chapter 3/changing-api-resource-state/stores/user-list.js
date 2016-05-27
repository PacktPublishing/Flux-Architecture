'use strict';

import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

// Our "UserList" store which is an "EventEmitter"
class UserListStore extends EventEmitter {
  constructor() {
    super();

    // There's no users in this list by default.
    this.state = []

    dispatcher.register((e) => {
      switch (e.type) {

        // The "USER_ADD" action adds the "payload" to
        // the array state.
        case 'USER_ADD':
          this.state.push(e.payload);
          this.emit('change', this.state);
          break;

        // The "USER_REMOVE" action has a user id as
        // the "payload" - this is used to locate the
        // user in the array and remove it.
        case 'USER_REMOVE':
          let user = this.state.find(x => x.id === e.payload);

          if (user) {
            this.state.splice(this.state.indexOf(user), 1);
            this.emit('change', this.state);
          }

          break;
      }
    });
  }
}

export default new UserListStore();

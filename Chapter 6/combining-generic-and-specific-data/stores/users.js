'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import groups from './groups';
import { LOAD_USERS } from '../actions/load-users';

// A users store that depends on the generic
// groups store so that it can perform the necessary
// state transformations.
class Users extends EventEmitter {
  constructor() {
    super();

    this.state = [];

    dispatcher.register((e) => {
      switch(e.type) {
        case LOAD_USERS:

          // We only want to keep enabled users.
          let users = e.payload.filter(
            x => x.enabled);

          // Maps to a new users array, each user object
          // containing a new "groupName" property. This
          // comes from the generic group store, and is
          // looked up by id.
          this.state = users.map(
            x => Object.assign({
              groupName: groups.state.find(
                y => y.id === x.group
              ).name
            }, x));

          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new Users();

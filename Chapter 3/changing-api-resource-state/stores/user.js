'use strict';

import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

// Our "User" store which is an "EventEmitter"
class UserStore extends EventEmitter {
  constructor() {
    super();
    this.state = {
      first: '',
      last: ''
    };

    dispatcher.register((e) => {
      switch (e.type) {
        // When the "USER_LOAD" action is dispatched, we
        // can assign the payload to this store's state.
        case 'USER_LOAD':
          Object.assign(this.state, e.payload);
          this.emit('change', this.state);
          break;

        // When the "USER_REMOVE" action is dispatched,
        // we need to check if this is the user that was
        // removed. If so, then reset the state.
        case 'USER_REMOVE':
          if (this.state.id === e.payload) {
            Object.assign(this.state, {
              id: null,
              first: '',
              last: ''
            });

            this.emit('change', this.state);
          }

          break;
      }
    });
  }
}

export default new UserStore();

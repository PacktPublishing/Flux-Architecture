'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { LOAD_GROUPS } from '../actions/load-groups';

// A generic store for user groups...
class Groups extends EventEmitter {
  constructor() {
    super();

    this.state = [];

    dispatcher.register((e) => {
      switch(e.type) {

        // Stores the payload of a group array "as-is".
        case LOAD_GROUPS:
          this.state = e.payload;
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new Groups();

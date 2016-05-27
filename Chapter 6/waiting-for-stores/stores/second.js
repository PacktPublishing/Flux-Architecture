'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';

class Second extends EventEmitter {
  constructor() {
    super();

    // Registering a callback with the dispatcher
    // returns an identifier...
    this.id = dispatcher.register((e) => {
      switch(e.type) {
        case MY_ACTION:
          this.emit('change');
          break;
      }
    });
  }
}

export default new Second();

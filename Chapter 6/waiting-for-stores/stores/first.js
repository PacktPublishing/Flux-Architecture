'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';
import second from './second';

class First extends EventEmitter {
  constructor() {
    super();

    // Registering a callback with the dispatcher
    // returns an identifier...
    this.id = dispatcher.register((e) => {
      switch(e.type) {
        case MY_ACTION:

          // This tells the dispatcher to process any
          // callback functions that were registered
          // to "second.id" before continuing here.
          dispatcher.waitFor([ second.id ]);
          this.emit('change');
          break;
      }
    });
  }
}

export default new First();

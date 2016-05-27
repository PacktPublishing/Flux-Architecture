'use strict';

import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';

// The initial state of the store. Instead of
// empty strings, this state uses labels that
// indicate that there's still data to come.
var state = {
  first: 'loading...',
  last: 'loading...'
};

class MyStore extends EventEmitter {
  constructor() {
    super();

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // When the "MY_ACTION" action is
        // dispatched, we extend the state
        // with the value of "payload",
        // overriding any existing property values.
        case MY_ACTION:
          this.emit('change',
            (state = Object.assign(
              {},
              state,
              e.payload
            ))
          );
          break;
      }
    });
  }

  get state() {
    return state;
  }
}

export default new MyStore();

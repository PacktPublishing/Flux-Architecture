'use strict';

import { EventEmitter } from '../events';
import dispatcher from '../dispatcher';
import { DO_STUFF } from '../actions/do-stuff';

var state = {};

class MyStore extends EventEmitter {
  constructor() {
    super();

    // Registers a method of this store as the
    // handler, to better support unit testing.
    this.id = dispatcher.register(this.onAction.bind(this));
  }

  // Instead of performing the state transformation
  // in the function that's registered with the
  // dispatcher, it just determines which store
  // method to call. This approach better supports
  // testability.
  onAction(action) {
    switch (action.type) {
      case DO_STUFF:
        this.doStuff(action.payload);
        break;
    }
  }

  // Changes the "state" of the store, and emits
  // a "change" event.
  doStuff(payload) {
    this.emit('change', (state = payload));
  }
}

export default new MyStore();

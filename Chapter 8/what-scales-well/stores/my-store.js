'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';

// We're exporting the store class instead of
// an instance from this module because the
// main module will create a bunch of them.
export default class MyStore extends EventEmitter {
  constructor() {
    super();

    // The EventEmitter thinks we're leaking memory
    // there's too many listeners. This circumvents
    // the limitation.
    this.setMaxListeners(5000);

    this.state = {};

    this.id = dispatcher.register((e) => {
      let {state} = this;

      // Perform some basic arithmetic before emitting
      // the "change" event with the "result" state
      // property.
      switch(e.type) {
        case MY_ACTION:
          state.result = 100000 * e.payload;
          this.emit('change', state);
          break;
      }
    });
  }
}

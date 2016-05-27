'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { ADD } from '../actions/add';

class MyStore extends EventEmitter {
  constructor() {
    super();

    // The "items" state is an empty array
    // by default...
    this.state = {
      items: []
    };

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // Push the "payload" to the "items"
        // array when the "ADD" action is
        // dispatched.
        case ADD:
          let { state } = this;

          state.items.push(e.payload);
          this.emit('change', state);
          break;
      }
    });
  }
}

export default new MyStore();

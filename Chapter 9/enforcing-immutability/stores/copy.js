'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';

// The state of this store is encapsulated
// within the module.
var state = {
  first: 1,
  second: 2,
};

class Copy extends EventEmitter {
  constructor() {
    super();

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        case MY_ACTION:

          // Mutates "state" with new properties...
          Object.assign(state, e.payload);
          this.emit('change', state);
          break;
      }
    });
  }

  // Returns a new copy of "state", not a reference
  // to the original.
  get state() {
    return Object.assign({}, state);
  }
}

export default new Copy();

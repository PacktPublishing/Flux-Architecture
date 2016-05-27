'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';

// The state of this store is encapsulated
// within this module. It's also stored as
// a constant.
const state = {
  first: 1,
  second: 2,
};

class Constant extends EventEmitter {
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

  // Returns a reference to the "state" constant...
  get state() {
    return state;
  }
}

export default new Constant();

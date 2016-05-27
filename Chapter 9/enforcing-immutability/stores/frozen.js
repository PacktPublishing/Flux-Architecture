'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';

// The store state is encapsulated within
// this module...
var state;

// Merges new values with current values, freezes
// the new state, and assigns it to "state".
function change(newState) {
  let changedState = Object.assign({}, state, newState);
  state = Object.freeze(changedState);
}

// Sets the initial state and freezes it...
change({
  first: 1,
  second: 2,
});

class Frozen extends EventEmitter {
  constructor() {
    super();

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        case MY_ACTION:

          // Calls "change()" to update the "state"
          // value and re-freeze it.
          change(e.payload);
          this.emit('change', state);
          break;
      }
    });
  }

  // Returns a reference to the frozen "state"...
  get state() {
    return state;
  }
}

export default new Frozen();

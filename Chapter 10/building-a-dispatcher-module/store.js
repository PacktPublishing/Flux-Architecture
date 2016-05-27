'use strict';

import { EventEmitter } from 'events';
import { register } from './dispatcher';

// Exports the base store for others to extend.
export default class Store extends EventEmitter {

  // The constructor sets the intial "state" of the
  // store, as well as any dependencies "deps" with
  // other stores.
  constructor(state = {}, deps = []) {
    super();

    // Stores the state and dependencies. The "deps"
    // property is actually required by the
    // dispatcher.
    this.state = state;
    this.deps = deps;

    // Registers the store with the dispatcher.
    register(this);
  }

  // This is a simple helper method that changes the
  // state of the store, by setting the "state"
  // property and then emitting the "change" event.
  change(state) {
    this.state = state;
    this.emit('change', state);
  }

}

'use strict';

import Store from '../store';
import second from './second';
import third from './third';

// The initial state of the store, we'll
// pass this to "super()" in the constructor.
const initialState = {
  foo: false
};

// The dependencies this store has on other
// stores. In this case, it's "second" and
// "third". These too, are passed through
// "super()".
const deps = [ second, third ];

class First extends Store {

  // The call to "super()" takes care for setting up
  // the initial store state, and the dependencies
  // for us.
  constructor() {
    super(initialState, deps);
  }

  // Called in response to the "FOO" action
  // being dispatched...
  FOO(payload) {
    this.change({ foo: true });
  }

  // Called in response to the "BAR" action
  // being dispatched...
  BAR(payload) {
    this.change(Object.assign({
      bar: true
    }, this.state));
  }
}

export default new First();

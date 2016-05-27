'use strict';

import Store from '../store';
import third from './third';

class Second extends Store {

  // The call to "super()" sets the initial
  // state for us.
  constructor() {
    super({
      foo: false
    });
  }

  // Called in response to the "FOO" action
  // being dispatched...
  FOO(payload) {
    this.change({ foo: true });
  }

  // Called in response to the "BAR" action
  // being dispatched. Note that we're
  // dependent on the "third" store, yet
  // we don't make this dependency explicit.
  // This could lead to trouble.
  BAR(payload) {
    this.change({
      foo: third.state.foo
    });
  }
}

export default new Second();

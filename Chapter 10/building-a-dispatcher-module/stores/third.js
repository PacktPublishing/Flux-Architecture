'use strict';

import Store from '../store';

class Third extends Store {

  // The call to "super()" sets the initial
  // state for us...
  constructor() {
    super({
      foo: false
    });
  }

  // Called in response to the "FOO" action
  // being dispatched.
  FOO(payload) {
    this.change({ foo: 'updated' });
  }
}

export default new Third();

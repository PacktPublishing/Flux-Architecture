'use strict';

import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import { REVERSE } from '../actions/reverse';

// The initial state is a list of
// user objects.
var state = {
  users: [
    { first: 'first 1', last: 'last 1' },
    { first: 'first 2', last: 'last 2' },
    { first: 'first 3', last: 'last 3' }
  ]
};

class MyStore extends EventEmitter {
  constructor() {
    super();

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // When the "REVERSE" action is dispatched,
        // the "state.users" array is reversed by
        // calling "reverse()".
        case REVERSE:
          this.emit('change',
            (state = Object.assign(
              {},
              state,
              { users: state.users.reverse() }
            ))
          );
          break;
      }
    });
  }

  get state() {
    return state;
  }
}

export default new MyStore();

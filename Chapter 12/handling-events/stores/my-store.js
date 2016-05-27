'use strict';

import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import { REVERSE } from '../actions/reverse';
import { SELECT } from '../actions/select';

// The initial state is a list of
// user objects. They each have a
// "fontWeight" property which is
// translated to a CSS value when
// rendered.
var state = {
  users: [
    {
      first: 'first 1',
      last: 'last 1',
      fontWeight: 'normal'
    },
    {
      first: 'first 2',
      last: 'last 2',
      fontWeight: 'normal'
    },
    {
      first: 'first 3',
      last: 'last 3',
      fontWeight: 'normal'
    }
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

        // When the "SELECT" action is dispatched, we
        // need to find the appropriate item based on
        // the "payload" index and mark it as selected.
        case SELECT:
          this.emit('change',
            (state = Object.assign(
              {},
              state,
              { users: state.users.map((v, i) => {

                // If the current index is the selected
                // item, change the "fontWeight" property.
                if (i === e.payload) {
                  return Object.assign({}, v,
                    { fontWeight: 'bold' });

                // Otherwise, set the "fontWeight" back
                // to "normal" so that any previously
                // selected items are reset.
                } else {
                  return Object.assign({}, v,
                    { fontWeight: 'normal' });
                }
              })}
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

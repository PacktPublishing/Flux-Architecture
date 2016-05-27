'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { FIRST } from '../actions/first';
import { SECOND } from '../actions/second';
import checkboxes from './checkboxes';

class Labels extends EventEmitter {
  constructor() {
    super();

    // The initial state of this store depends
    // on the initial state of the "checkboxes"
    // store.
    this.state = {
      first: checkboxes.state.first ?
        'line-through' : 'none',
      second: checkboxes.state.second ?
        'line-through' : 'none'
    };

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // The "FIRST" action was dispatched, so wait
        // for the "checkboxes" UI state, then update
        // the UI state of the "first" label.
        case FIRST:
          dispatcher.waitFor([ checkboxes.id ]);

          this.state.first = checkboxes.state.first ?
            'line-through' : 'none';

          this.emit('change', this.state);
          break;

        // The "SECOND" action was dispatched, so wait
        // for the "checkboxes" UI state, then update
        // the UI state of the "second" label.
        case SECOND:
          dispatcher.waitFor([ checkboxes.id ]);

          this.state.second = checkboxes.state.second ?
            'line-through' : 'none';

          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new Labels();

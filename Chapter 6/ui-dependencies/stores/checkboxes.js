'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { FIRST } from '../actions/first';
import { SECOND } from '../actions/second';

class Checkboxes extends EventEmitter {
  constructor() {
    super();

    this.state = {
      first: true,
      second: true
    };

    // Sets the dispatch id of this store
    // so that other stores can depend on it.
    // Depending on the action, this handler
    // changes the boolean UI state of a given
    // checkbox.
    this.id = dispatcher.register((e) => {
      switch(e.type) {
        case FIRST:
          this.state.first = e.payload;
          this.emit('change', this.state);
          break;
        case SECOND:
          this.state.second = e.payload;
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new Checkboxes();

'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { HIDE_ALL, HIDE_ODD } from '../actions/hide';

class MyStore extends EventEmitter {
  constructor() {
    super();

    // The initial state is an "items" array
    // of 100 numbers.
    this.state = {
      items: new Array(100)
        .fill(null)
        .map((x, y) => y)
    };

    this.id = dispatcher.register((e) => {
      let { state } = this;

      switch(e.type) {

        // When the "HIDE_ALL" action is dispatched,
        // the "items" state is reset back to
        // an empty array.
        case HIDE:
          state.items = []
          this.emit('change', state);
          break;

        // When the "HIDE_ODD" action is dispatched,
        // the "items" state is filtered to include
        // only even numbers.
        case HIDE_ODD:
          state.items = state.items.filter(
            x => !(x % 2));
          this.emit('change', state);
          break;
      }
    });
  }
}

export default new MyStore();

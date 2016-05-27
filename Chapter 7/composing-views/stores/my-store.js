'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { SORT_DESC } from '../actions/sort-desc';

class MyStore extends EventEmitter {
  constructor() {
    super();

    // The default store state has an array of
    // strings.
    this.state = {
      items: [
        'First',
        'Second',
        'Third'
      ]
    };

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // The "SORT_DESC" action sorts the
        // "items" array in descending order.
        case SORT_DESC:
          let { state } = this;

          state.items.sort().reverse();
          this.emit('change', state);
          break;
      }
    });
  }
}

export default new MyStore();

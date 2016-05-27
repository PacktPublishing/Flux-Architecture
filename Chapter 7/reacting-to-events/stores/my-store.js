'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { SORT } from '../actions/sort';

// Constants for the direction label
// of the sort button.
const ASC = 'sort ascending';
const DESC = 'sort descending';

class MyStore extends EventEmitter {
  constructor() {
    super();

    // We have some "items", and a "direction"
    // as the default state of this store.
    this.state = {
      direction: ASC,
      items: [
        'Second',
        'First',
        'Third'
      ]
    };

    this.id = dispatcher.register((e) => {
      switch(e.type) {
        case SORT:
          let { state } = this;

          // The "items" are always sorted.
          state.items.sort()

          // If the current "direction" is ascending,
          // then update it to "DESC". Otherwise, it's
          // updated to "ASC" and the order is reversed.
          if (state.direction === ASC) {
            state.direction = DESC;
          } else {
            state.direction = ASC;
            state.items.reverse();
          }

          this.emit('change', state);
          break;
      }
    });
  }
}

export default new MyStore();

'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { SHOW_CLASS, SHOW_FUNCTION } from '../actions/show';

class MyStore extends EventEmitter {
  constructor() {
    super();

    // The two content properties of this store's state
    // empty arrays, meaning empty content.
    this.state = {
      classContent: [],
      functionContent: []
    };

    this.id = dispatcher.register((e) => {
      let {state} = this;

      switch(e.type) {

        // If the "SHOW_CLASS" action was dispatched,
        // the "classContent" state gets a single item
        // array and the "functionContent" state gets
        // and empty array.
        case SHOW_CLASS:
          Object.assign(state, {
            classContent: [ 'Class View' ],
            functionContent: []
          });

          this.emit('change', state);
          break;

        // If the "SHOW_FUNCTION" action was dispatched,
        // the "functionContent" state gets a single item
        // array and the "classContent" state gets an
        // empty array.
        case SHOW_FUNCTION:
          Object.assign(state, {
            classContent: [],
            functionContent: [ 'Function View' ]
          });

          this.emit('change', state);
          break;
      }
    });
  }
}

export default new MyStore();

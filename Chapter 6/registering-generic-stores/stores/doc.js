'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import docs from './docs';
import { LOAD_DOC } from '../actions/load-doc';

// The specific store that depends on the generic
// "docs" store.
class Doc extends EventEmitter {
  constructor() {
    super();

    this.state = {
      name: ''
    };

    dispatcher.register((e) => {
      switch(e.type) {
        case LOAD_DOC:

          // The "id" of the document...
          let { id } = e.payload;

          // Here's where the generic store data
          // comes in handy - we only care about
          // the document name. We can use the "id"
          // to look this up from the generic store.
          this.state.name = docs.state[id];

          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new Doc();

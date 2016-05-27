'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { LOAD_DOC } from '../actions/load-doc';

// The generic "Docs" store keeps an index
// of document names, since they're used
// by many other stores.
class Docs extends EventEmitter {
  constructor() {
    super();

    this.state = [];

    dispatcher.register((e) => {
      switch(e.type) {
        case LOAD_DOC:

          // When a "LOAD_DOC" action is dispatched,
          // we take the "payload.docs" data and
          // transform it into the generic state that's
          // required by many other stores.
          for (let doc of e.payload.docs) {
            this.state[doc.id] = doc.name;
          }

          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new Docs();

'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

// We need a couple action constants from
// the same action module.
import {
  PRE_ROUTE_UPDATE,
  ROUTE_UPDATE
} from '../actions/route-update';

class First extends EventEmitter {
  constructor() {
    super();

    // The "content" state is initially an
    // empty string.
    this.state = {
      content: ''
    };

    this.id = dispatcher.register((e) => {
      let { state } = this;

      switch(e.type) {

        // The "PRE_ROUTE_UPDATE" action means the
        // route is about to change once the
        // asynchronous code in the action creator
        // resolves. We can update the "content"
        // state here.
        case PRE_ROUTE_UPDATE:
          if (e.payload.endsWith('first')) {
            state.content = 'Loading...';
            this.emit('change', state);
          }
          break;

        // When the "ROUTE_UPDATE" action is dispatched,
        // we can change the content to show that it has
        // loaded.
        case ROUTE_UPDATE:
          if (e.payload.endsWith('first')) {
            state.content = 'First Loaded';
            this.emit('change', state);
          }
          break;
      }
    });
  }
}

export default new First();

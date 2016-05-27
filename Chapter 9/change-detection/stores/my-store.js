'use strict';

import { EventEmitter } from 'events';
import Immutable from 'Immutable';

import dispatcher from '../dispatcher';
import {MY_ACTION} from '../actions/my-action';

// The store state is an Immutable.js Map instance.
var state = Immutable.Map({
  text: 'off'
});

class MyStore extends EventEmitter {
  constructor() {
    super();

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // When "MY_ACTION" is dispatched, we set
        // the "text" property of "state" as the
        // "payload". If the value has change, "state"
        // "set()" returns a new instance. If there's
        // no change, it returns the same instance.
        case MY_ACTION:
          this.emit('change',
            (state = state.set('text', e.payload)));
          break;
      }
    });
  }

  get state() {
    return state;
  }
}

export default new MyStore();

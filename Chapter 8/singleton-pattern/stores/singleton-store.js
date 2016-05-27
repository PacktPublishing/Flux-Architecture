'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';

// A typical Flux store class. This module
// exports a singleton instance of it.
class SingletonStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
      pending: true
    };

    this.id = dispatcher.register((e) => {
      switch(e.type) {
        case MY_ACTION:
          this.state.pending = false;
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new SingletonStore();

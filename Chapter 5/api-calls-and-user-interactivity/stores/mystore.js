'use strict';

import dispatcher from '../dispatcher';
import {
  START,
  STARTING,
  STOP,
  STOPPING
} from '../actions/constants';

import { EventEmitter } from 'events';

class MyStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
      startDisabled: false,
      stopDisabled: true
    };

    dispatcher.register((e) => {
      switch(e.type) {

        // If starting or stopping, we don't want any
        // buttons enabled.
        case STARTING:
        case STOPPING:
          this.state.startDisabled = true;
          this.state.stopDisabled = true;
          this.emit('change', this.state);
          break;

        // Disable the stop button after being started.
        case START:
          this.state.startDisabled = true;
          this.state.stopDisabled = false;
          this.emit('change', this.state);
          break;

        // Disabled the start button after being stopped.
        case STOP:
          this.state.startDisabled = false;
          this.state.stopDisabled = true;
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new MyStore();

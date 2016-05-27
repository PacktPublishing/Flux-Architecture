'use strict';

import { EventEmitter } from '../events';
import dispatcher from '../dispatcher';
import { POWER_ON } from '../actions/power-on';
import { POWER_OFF } from '../actions/power-off';

// The initial state of the store...
var state = {
  power: 'off',
  busy: false
};

class MyStore extends EventEmitter {

  // Sets the initial state of the store to the given
  // argument if provided.
  constructor(initialState = state) {
    super();
    state = initialState;
    this.id = dispatcher.register(this.onAction.bind(this));
  }

  // Figure out which action was dispatched and call the
  // appropriate method.
  onAction(action) {
    switch (action.type) {
      case POWER_ON:
        this.powerOn();
        break;
      case POWER_OFF:
        this.powerOff();
        break;
    }
  }

  // Changes the power state to "on", if the power state is
  // currently "off".
  powerOn() {
    if (state.power === 'off') {
      this.emit('change', (state = Object.assign({}, state, {
        power: 'on'
      })));
    }
  }

  // Changes the power state to "off" if "busy" is false and
  // if the current power state is "on".
  powerOff() {
    if (!state.busy && state.power === 'on') {
      this.emit('change', (state = Object.assign({}, state, {
        power: 'off'
      })));
    }
  }

  // Gets the state...
  get state() {
    return state;
  }
}

export default MyStore;

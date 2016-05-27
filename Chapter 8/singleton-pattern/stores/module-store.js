'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/my-action';

// Exports the state of this store...
export var state = {
  pending: true
};

// Exports the "id" of the dispatcher registration
// so that other stores can depend on this module.
export var id = dispatcher.register((e) => {
  switch(e.type) {
    case MY_ACTION:
      state.pending = false;
      emitter.emit('change', state);
      break;
    }
});

// We need to create a new "EventEmitter" here
// since there's no class to extend it.
const emitter = new EventEmitter();

// Exports the minimal interface that views
// require to listen/unlisten to stores.
export const on = emitter.on.bind(emitter);
export const off = emitter.removeListener.bind(emitter);

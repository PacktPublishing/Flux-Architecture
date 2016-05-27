'use strict';

// We need the "dispatcher" to register our store,
// and the "EventEmitter" class so that our store
// can emit "change" events when the state of the
// store changes.
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

// Our "Home" store which is an "EventEmitter"
class HomeStore extends EventEmitter {
  constructor() {

    // We always need to call this when extending a class.
    super();

    // Sets a default state for the store. This is
    // never a bad idea, in case other stores want to
    // iterate over array values - this will break if
    // they're undefined.
    this.state = {
      user: '',
      events: [],
      navigation: []
    };

    // When a "HOME_LOAD" event is dispatched, we
    // can assign "payload" to "state", then we can
    // emit a "change" event.
    dispatcher.register((e) => {
      switch (e.type) {
        case 'HOME_LOAD':
          Object.assign(this.state, e.payload);
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new HomeStore();

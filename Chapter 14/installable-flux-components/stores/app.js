'use strict';

import { EventEmitter } from 'events';
import { INIT } from '../actions/init';

// The initial state of the "App" store has
// some header text and a collection of
// navigation links.
const initialState = {
  header: [ 'Home' ],
  links: [
    { title: 'Users', action: 'LOAD_USERS' },
    { title: 'Groups', action: 'LOAD_GROUPS' }
  ]
};

// The actual state is empty by default, meaning
// that nothing gets rendered.
var state = {
  header: [],
  links:[]
};

export default class App extends EventEmitter{
  constructor(dispatcher) {
    super();

    this.id = dispatcher.register((action) => {
      switch(action.type) {

        // When the "INIT" action is dispatched,
        // we assign the initial state to the empty
        // state, which triggers a re-render.
        case INIT:
          state = Object.assign({}, initialState);
          break;

        // By default, we empty out the store's state.
        default:
          state = Object.assign({}, state, {
            header: [],
            links: []
          });
          break;
      }

      // We always emit the change event.
      this.emit('change', state);
    });
  }

  get state() {
    return Object.assign({}, state);
  }
}

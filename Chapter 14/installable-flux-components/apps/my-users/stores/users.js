'use strict';

import { EventEmitter } from 'events';
import { LOAD_USERS } from '../actions/load-users';
import { LOAD_USER } from '../actions/load-user';

// The initial state of the store has some header
// text and a collection of user objects.
const initialState = {
  header: [ 'Users' ],
  users: [
    { id: 1, name: 'First User' },
    { id: 2, name: 'Second User' },
    { id: 3, name: 'Third User' }
  ]
};

// The state of the store that gets rendered by
// views. Initially this is empty so nothing is
// rendered by the view.
var state = {
  header: [],
  users: []
};

export default class Users extends EventEmitter{
  constructor(dispatcher) {
    super();

    this.id = dispatcher.register((action) => {
      switch(action.type) {

        // When the "LOAD_USERS" action is dispatched,
        // we populate the store state using the initial
        // state object. This causes the view to render.
        case LOAD_USERS:
          state = Object.assign({}, initialState);
          break;

        // When the "LOAD_USER" action is dispatched,
        // we update the header text by finding the user
        // that corresponds to the "payload" id, and using
        // it's "name" property.
        case LOAD_USER:
          state = Object.assign({}, state, {
            header: [ state.users.find(
              x => x.id === action.payload).name ]
          });
          break;

        // By default, we want to empty the store state.
        default:
          state = Object.assign({}, state, {
            header: [],
            users: []
          });
          break;
      }

      // Always emit the change event.
      this.emit('change', state);
    });
  }

  get state() {
    return Object.assign({}, state);
  }
}

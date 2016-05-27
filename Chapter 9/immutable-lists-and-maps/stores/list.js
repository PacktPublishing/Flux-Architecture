'use strict';

import { EventEmitter } from 'events';
import Immutable from 'Immutable';

import dispatcher from '../dispatcher';
import { LIST_PUSH, LIST_CAPS } from '../actions/list';

// The state of this store is an "Immutable.List"
// instance...
var state = Immutable.List();

class List extends EventEmitter {
  constructor() {
    super();

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // When the "LIST_PUSH" action is dispatched,
        // we create a new List instance by calling
        // "push()". The new list is assigned to "state".
        case LIST_PUSH:
          this.emit('change',
            (state = state.push(...e.payload)));
          break;

        // When the "LIST_CAPS" action is dispatched,
        // we created a new List instance by calling
        // "map()". The new list is assigned to "state".
        case LIST_CAPS:
          this.emit('change',
            (state = state.map(x => x.toUpperCase())));
          break;
      }
    });
  }

  get state() {
    return state;
  }
}

export default new List();

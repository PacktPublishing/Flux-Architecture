'use strict';

import { EventEmitter } from 'events';
import Immutable from 'Immutable';

import dispatcher from '../dispatcher';
import { MAP_MERGE, MAP_INCR } from '../actions/map';

// The state of this store is an "Immutable.Map"
// instance...
var state = Immutable.Map();

class MapStore extends EventEmitter {
  constructor() {
    super();

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // When the "MAP_MERGE" action is dispatched,
        // we create a new Map instance by calling
        // "merge()". The new map is assigened to "state".
        case MAP_MERGE:
          this.emit('change',
            (state = state.merge(e.payload)));
          break;

        // When the "MAP_INCR" action is dispatched,
        // we create a new Map instance by calling
        // "map()". The new map is assigned to "state".
        case MAP_INCR:
          this.emit('change',
            (state = state.map(x => x + 1)));
      }
    });
  }

  get state() {
    return state;
  }
}

export default new MapStore();

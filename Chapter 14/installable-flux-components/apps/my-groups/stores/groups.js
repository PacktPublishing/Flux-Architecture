'use strict';

import { EventEmitter } from 'events';
import { LOAD_GROUPS } from '../actions/load-groups';
import { LOAD_GROUP } from '../actions/load-group';

const initialState = {
  header: [ 'Groups' ],
  groups: [
    { id: 1, name: 'Group 1' },
    { id: 2, name: 'Group 2' },
    { id: 3, name: 'Group 3' }
  ]
};

var state = {
  header: [],
  groups: []
};

export default class Groups extends EventEmitter {
  constructor(dispatcher) {
    super();

    this.id = dispatcher.register((action) => {
      switch(action.type) {
        case LOAD_GROUPS:
          state = Object.assign({}, initialState);
          this.emit('change', state);
          break;
        case LOAD_GROUP:
          state = Object.assign({}, state, {
            header: [
              state.groups.find(
                x => x.id === action.payload).name
            ]
          });
          this.emit('change', state);
          break;
        default:
          state = Object.assign({}, state, {
            header: [],
            groups: []
          });
          this.emit('change', state);
          break;
      }
    });
  }

  get state() {
    return Object.assign({}, state);
  }
}

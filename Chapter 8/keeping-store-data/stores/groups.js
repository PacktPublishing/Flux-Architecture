'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { SHOW_GROUPS } from '../actions/show';

class Groups extends EventEmitter {
  constructor() {
    super();

    // The default "_group" state is an array of group
    // names.
    this.state = {
      _groups: [
        'Group 1',
        'Group 2'
      ]
    };

    // The "groups" state is what's actually used
    // by views and is an empty array by default
    // because nothing is displayed by default.
    this.state.groups = [];

    this.id = dispatcher.register((e) => {
      let { state } = this;

      switch(e.type) {

        // The "SHOW_GROUPS" action will map the
        // "_groups" state to the "groups" state
        // so that the view has something to display.
        case SHOW_GROUPS:
          state.groups = state._groups.map(x => x);
          this.emit('change', state);
          break;

        // By default, the "groups" state is emptied,
        // which clears out the view's elements. The
        // "_groups" state, however, remains intact.
        default:
          state.groups = [];
          this.emit('change', state);
          break;
      }
    });
  }
}

export default new Groups();

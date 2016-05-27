'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { NAME_CAPS } from '../actions/name-caps';

class First extends EventEmitter {
  constructor() {
    super();

    // The default state is a "name" property
    // with a lower-case string.
    this.state = {
      name: 'foo'
    };

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // Mutates the "name" property, keeping
        // the "state" object intact.
        case NAME_CAPS:
          let { state } = this;
          state.name = state.name.toUpperCase();
          this.emit('change', state);
          break;
      }
    });
  }
}

export default new First();

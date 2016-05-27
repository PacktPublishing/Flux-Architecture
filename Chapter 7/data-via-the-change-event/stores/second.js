'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { NAME_CAPS } from '../actions/name-caps';

class Second extends EventEmitter {
  constructor() {
    super();

    // The defaul state is a name property
    // with a lower-case string.
    this.state = {
      name: 'foo'
    };

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // Assigns a new "state" object, invalidating
        // any references to any previous state.
        case NAME_CAPS:
          this.state = {
            name: this.state.name.toUpperCase()
          };
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new Second();

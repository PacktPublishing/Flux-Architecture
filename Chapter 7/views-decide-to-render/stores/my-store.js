'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { NAME_CAPS } from '../actions/name-caps';

class MyStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
      name: 'foo'
    };

    this.id = dispatcher.register((e) => {
      switch(e.type) {
        case NAME_CAPS:

          // Convert to upper-case.
          let name = this.state.name.toUpperCase();

          // Only assing the new state object if
          // the "name" isn't already in upper-case.
          this.state = this.state.name === name ?
            this.state : {
              name: this.state.name.toUpperCase()
            };

          // Tell views about the state change, even
          // if the state object is the same.
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new MyStore();

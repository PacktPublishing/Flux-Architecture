'use strict';

import {default as dispatcher} from '../dispatcher';
import {EventEmitter} from 'events';

class PlayerStore extends EventEmitter {
  constructor() {
    super();

    // The property keys in the default state are
    // used to determine the allowable properties
    // used to set the state.
    this.state = {
      id: null,
      name: ''
    };

    dispatcher.register((e) => {
      switch (e.type) {
        case 'PLAYER_LOAD':

          // Make sure that we only take payload data
          // that's already a state property.
          for (let key in this.state) {
            this.state[key] = e.payload[key];
          }

          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new PlayerStore();

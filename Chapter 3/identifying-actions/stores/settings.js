'use strict';

import {default as dispatcher} from '../dispatcher';
import {EventEmitter} from 'events';

class SettingsStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
      email: '',
      allTheThings: false
    };

    dispatcher.register((e) => {
      switch (e.type) {
        case 'SET_EMAIL':
          this.state.email = e.payload;
          this.emit('change', this.state);
          break;
        case 'DO_THE_THINGS':
          this.state.allTheThings = !!e.payload;
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new SettingsStore();

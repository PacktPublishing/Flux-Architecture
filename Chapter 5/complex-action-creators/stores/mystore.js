'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { MY_ACTION } from '../actions/myaction';

class MyStore extends EventEmitter {
  constructor() {
    super();

    this.state = [];

    dispatcher.register((e) => {
      switch(e.type) {
        case MY_ACTION:

          // Get the resolved async values from the
          // action payload.
          let { first, second, third } = e.payload;

          // Zip the three arrays and set the resulting
          // array as the store state.
          this.state = first.map((item, i) =>
            [ item, second[i], third[i] ]);

          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new MyStore();

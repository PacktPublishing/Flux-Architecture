'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { TOGGLE } from '../actions/toggle';

class Button extends EventEmitter {
  constructor() {
    super();

    // The default state is to show the button
    // as enabled and to process click events.
    this.state = {
      text: 'Enabled',
      disabled: false
    };

    this.id = dispatcher.register((e) => {
      let { state } = this;

      switch(e.type) {

        // When the "TOGGLE" action is dispatched,
        // the next state of the button depends on
        // the current state of the "disabled"
        // property.
        case TOGGLE:
          state.text = state.disabled ?
            'Enabled' : 'Disabled';
          state.disabled = !state.disabled;

          this.emit('change', state);
          break;
      }
    });
  }
}

export default new Button();

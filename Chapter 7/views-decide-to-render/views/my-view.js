'use strict';

import myStore from '../stores/my-store';

class MyView {
  constructor() {

    // The view keeps a copy of the previous
    // store state.
    this.previousState = null;

    myStore.on('change', (state) => {

      // Make sure we have a new state before
      // rendering. If "state" is equal to
      // "previousState", then we know there's
      // nothing new to render.
      if (state !== this.previousState) {
        console.log('name', state.name);
      }

      // Keep a reference of the state, so that
      // we can use it in the next "change"
      // event.
      this.previousState = state;
    });
  }
}

export default new MyView();

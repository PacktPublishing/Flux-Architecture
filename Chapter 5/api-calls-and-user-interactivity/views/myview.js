'use strict';

import myStore from '../stores/mystore';
import {
  start,
  starting,
  stop,
  stopping
} from '../actions/functions';

class MyView {
  constructor() {

    // The elements our view interacts with...
    this.start = document.getElementById('start');
    this.stop = document.getElementById('stop');

    // The start button was clicked. Dispatch the
    // "STARTING" action, and the "START" action
    // once the asynchronous call resolves.
    this.start.addEventListener('click', (e) => {
      starting();
      start();
    });

    // The stop button was clicked. Dispatch the
    // "STOPPING" action, and the "STOP" action
    // once the asynchronous call resolves.
    this.stop.addEventListener('click', (e) => {
      stopping();
      stop();
    });

    // When the store state changes, update the UI
    // by enabling or disabling the buttons,
    // depending on the store state.
    myStore.on('change', (state) => {
      this.start.disabled = state.startDisabled;
      this.stop.disabled = state.stopDisabled;
    });
  }
}

export default new MyView();

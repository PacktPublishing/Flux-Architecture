'use strict';

import checkboxes from '../stores/checkboxes';
import {first} from '../actions/first';
import {second} from '../actions/second';

class Checkboxes {
  constructor() {

    // The DOM elements our view manipulates (these
    // are checkboxes).
    this.first = document.getElementById('first');
    this.second = document.getElementById('second');

    // Dispatch the appropriate action when either
    // of the checkboxes change. The action payload
    // is the "checked" property of the UI element.
    this.first.addEventListener('change', (e) => {
      first(e.target.checked);
    });

    this.second.addEventListener('change', (e) => {
      second(e.target.checked);
    });

    // When the "checkboxes" store changes state,
    // render the view using the new state.
    checkboxes.on('change', (state) => {
      this.render(state);
    });

  }

  // Sets the "checked" properties of the checkbox
  // UI elements. By default, we use the initial
  // state of the "checkboxes" store. Otherwise,
  // we use whatever state is passed.
  render(state=checkboxes.state) {
    this.first.checked = state.first;
    this.second.checked = state.second;
  }
}

export default new Checkboxes();

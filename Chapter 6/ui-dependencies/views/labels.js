'use strict';

import labels from '../stores/labels';

class Labels {
  constructor() {

    // The DOM elements this view manipulates (these
    // are labels).
    this.first = document.querySelector('[for="first"]');
    this.second = document.querySelector('[for="second"]');

    // When the "labels" store changes, render
    // the view using the new state.
    labels.on('change', (state) => {
      this.render(state);
    });
  }

  // Updates the "textDecoration" style of our
  // label UI elements, using the "labels" store
  // state as the default. Otherwise, we use whatever
  // state is passed in.
  render(state=labels.state) {
    this.first.style.textDecoration = state.first;
    this.second.style.textDecoration = state.second;
  }
}

export default new Labels();

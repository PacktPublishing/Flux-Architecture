'use strict';

import myStore from '../stores/my-store';

class ClassView {
  constructor() {

    // The "container" DOM element for this view.
    this.container =
      document.getElementById('class-view');

    // Render the new state when "myStore" changes.
    myStore.on('change', (state) => {
      this.render(state);
    });
  }

  render({ classContent } = myStore.state) {

    // Sets the content of the containier element.
    // This is done by reducing the "classContent"
    // array to a single string. If it's empty,
    // any existing DOM elements are removed from
    // the container.
    this.container.innerHTML = classContent.reduce(
      (x, y) => `<strong>${x + y}</strong>`, '');
  }
}

export default new ClassView();

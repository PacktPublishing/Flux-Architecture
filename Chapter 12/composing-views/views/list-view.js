'use strict';

import template from './list-view.hbs';
import myStore from '../stores/my-store';

export default class ListView {
  constructor(element) {

    this.element = element;

    // When the store state changes, re-render
    // the view.
    myStore.on('change', (state) => {
      this.render(state);
    });
  }

  // Sets the HTML of "element" to the rendered
  // Handlebars "template()". The context of
  // the template is always the Flux store state.
  render(state = myStore.state) {
    this.element.html(template(state));
    return this;
  }
}

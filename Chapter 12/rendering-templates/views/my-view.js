'use strict';

// Imports the compiled Handlebars "template"
// function just like a regular JavaScript module.
import template from './my-view.hbs';
import myStore from '../stores/my-store';

export default class MyView {
  constructor(element) {

    // Sets the container element that
    // we'll use to place the rendered template
    // content. Expected to be a jQuery object.
    this.element = element;

    // When the store state changes, we can
    // re-render the view.
    myStore.on('change', (state) => {
      this.render(state);
    });
  }

  // Renders the view. The default state is
  // the initial "myStore.state". We use the
  // "element" property of the view to set the
  // HTML to the rendered output of the Handlebars
  // "template()".
  render(state = myStore.state) {
    this.element.html(template(state));
    return this;
  }
}

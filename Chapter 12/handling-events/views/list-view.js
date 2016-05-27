'use strict';

import template from './list-view.hbs';
import { reverse } from '../actions/reverse';
import { select } from '../actions/select';
import myStore from '../stores/my-store';

export default class ListView {
  constructor(element) {

    this.element = element;

    // When the store state changes, re-render
    // the view.
    myStore.on('change', (state) => {
      this.render(state);
    });

    this.element

      // Binds the click event to "#app", but
      // is only handled if a "button" element
      // generated the event. The "reverse()"
      // action creator is used as the handler.
      .on('click', 'button', reverse)

      // Binds the click event to "#app", but
      // is only handled if an "a" element
      // generated the event. The index is parsed
      // from the "href" attribute, and this is
      // passed as the payload to the "select()"
      // action creator.
      .on('click', 'a', (e) => {
        e.preventDefault();

        let index = +(/(\d+)$/)
          .exec(e.currentTarget.href)[1];

        select(index);
      });
  }

  // Sets the HTML of "element" to the rendered
  // Handlebars "template()". The context of
  // the template is always the Flux store state.
  render(state=myStore.state) {
    this.element.html(template(state));
    return this;
  }
}

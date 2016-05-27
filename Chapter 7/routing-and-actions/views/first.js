'use strict';

import { default as React, Component } from 'react';
import first from '../stores/first';

export default class First extends Component {
  constructor() {
    super();

    // The initial state comes from the store.
    this.state = first.state;

    // The store "change" callback function is
    // defined here so that it can be bound to
    // "this" and set the component state.
    this.onChange = (state) => {
      this.setState(state);
    };
  }

  // Renders the HTML using "content".
  render() {
    return (
      <p>{this.state.content}</p>
    );
  }

  // Sets up the store "change" listener.
  componentWillMount() {
    first.on('change', this.onChange);
  }

  // Removes the store "change" listener.
  componentWillUnmount() {
    first.removeListener('change', this.onChange);
  }
}

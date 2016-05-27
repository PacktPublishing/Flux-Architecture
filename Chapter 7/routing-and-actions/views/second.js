'use strict';

import React from 'react';
import {Component} from 'react';
import second from '../stores/second';

export default class Second extends Component {
  constructor() {
    super();

    // The initial state comes from the store.
    this.state = second.state;

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
    second.on('change', this.onChange);
  }

  // Removes the store "change" listener.
  componentWillUnmount() {
    second.removeListener('change', this.onChange);
  }
}

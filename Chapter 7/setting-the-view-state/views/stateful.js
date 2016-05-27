'use strict';

import { default as React, Component } from 'react';
import myStore from '../stores/my-store';

// A stateful React component that relies on
// it's on state in order to render updates.
export default class Stateful extends Component {
  constructor() {
    super();

    // When "myStore" changes, we set the state of
    // this component by calling "setState()", causing
    // a render to happen.
    myStore.on('change', (state) => {
      this.setState(state);
    });

    // The initial state of the component is
    // taken from the initial state of the Flux store.
    this.state = myStore.state;
  }

  // Renders a list of items.
  render() {
    return (
      <ul>
        {this.state.items.map(item =>
          <li key={item}>{item}</li>)}
      </ul>
    );
  }
}

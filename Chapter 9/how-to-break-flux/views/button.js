'use strict';

import React from 'react';
import button from '../stores/button';
import { toggle } from '../actions/toggle';

function onClick() {

  // Oh snap! This just totally broke Flux...
  button.state.disabled = !button.state.disabled;

  // Call the action creator as we should...
  toggle();
}

// Renders your typical HTML button, complete
// with properties and a callback handler for
// click events.
export default ({ text, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}>{text}</button>
);

'use strict';

import React from 'react';
import { render } from 'react-dom';

import button from './stores/button';
import Button from './views/button';

// The container DOM element for our React component.
const container = document.getElementById('app');

// Re-renders "Button" when the "button" store
// changes state.
button.on('change', (state) => {
  render(
    <Button
      text={state.text}
      disabled={state.disabled}
    />,
    container
  );
});

// Performs the initial "Button" render.
render(
  <Button
    text={button.state.text}
    disabled={button.state.disabled}
  />,
  container
);

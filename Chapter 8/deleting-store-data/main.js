'use strict';

import React from 'react';
import { render } from 'react-dom';

import myStore from './stores/my-store';
import MyView from './views/my-view';

// The DOM container for the React view...
var container = document.getElementById('my-view');

// Renders the functional "MyView" React
// component.
function renderView(state) {
  render(
    <MyView
      items={state.items}/>,
    container
  );
}

// Re-render the React component when the store
// state changes.
myStore.on('change', renderView);

// Perform the initial render.
renderView(myStore.state);

'use strict';

import React from 'react';
import { render } from 'react-dom';

import myStore from './stores/my-store';
import App from './views/app';
import { sortDesc } from './actions/sort-desc';

// The containiner element for our application.
var appContainer = document.getElementById('app');

// Renders the "App" view component when
// the store state changes.
myStore.on('change', (state) => {
  render(
    <App {...state}/>,
    appContainer
  );
});

// Initial rendering...
render(
  <App {...myStore.state}/>,
  appContainer
);

// Perform the descending sort...
sortDesc();

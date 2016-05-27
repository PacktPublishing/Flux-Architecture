'use strict';

import React from 'react';
import { render } from 'react-dom';

import myStore from './stores/my-store';
import MyView from './views/my-view';
import { myAction } from './actions/my-action';

// The container DOM element for our React component.
const container = document.getElementById('app');

// The payload that's sent to "myAction()"...
var payload = 'off';

// Renders the React components using the
// "myStore" state...
function renderApp(state=myStore.state) {
  render(
    <MyView state={myStore.state} />,
    container
  );
}

// Re-render the app when the store changes...
myStore.on('change', renderApp);

// Performs the initial rendering...
renderApp();

// Dispatches "MY_ACTION" every 0.5 seconds. This
// causes the store to change state and the app
// to re-render.
setInterval(() => {
  myAction(payload);
}, 500);

// After 5 seconds, change the payload that's
// dispatched with "MY_ACTION" so that the store
// state is actually different.
setTimeout(() => {
  payload = 'on';
}, 5000);

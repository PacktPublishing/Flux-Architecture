'use strict';

import React from 'react';
import { render } from 'react-dom';

import { showClass, showFunction } from './actions/show';
import myStore from './stores/my-store';
import classView from './views/class';
import FunctionView from './views/function';

// The DOM element used by our "FunctionView"
// component.
var functionConcainer = document
  .getElementById('function-view');

// Utility to render the "FunctionView" React
// component. Called by the store "change"
// handler and to perform the initial rendering.
function renderFunction(state) {
  render(
    <FunctionView
      content={state.functionContent}/>,
    functionConcainer
  );
}

// Sets up the "change" handler for "FunctionView"...
myStore.on('change', renderFunction);

// Perform the initial rendering of both views...
classView.render();
renderFunction(myStore.state);

// Dispatch the "SHOW_CLASS" action.
showClass();

// Wait one second, then dispatch the "SHOW_FUNCTION"
// action.
setTimeout(() => {
  showFunction();
}, 1000);

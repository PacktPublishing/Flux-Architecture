'use strict';

import React from 'react';
import { render } from 'react-dom';

import Stateful from './views/stateful';
import Stateless from './views/stateless';
import myStore from './stores/my-store';
import { add } from './actions/add';

// These are the DOM element "containers" that
// our React components are rendered into.
var statefulContainer =
  document.getElementById('stateful');
var statelessContainer =
  document.getElementById('stateless');

// Sets up the store change listener for our
// "Stateless" React component. This is simple
// "render()" call, React efficiently handles
// the DOM diffing semantics.
myStore.on('change', (state) => {
  render(
    <Stateless items={myStore.state.items}/>,
    statelessContainer
  );
});

// Initial rendering of our two components.
render(
  <Stateful/>,
  statefulContainer
);

render(
  <Stateless items={myStore.state.items}/>,
  statelessContainer
);

// Dispatch some actions, causing our store to change,
// and our React components to re-render.
add('first');
add('second');
add('third');

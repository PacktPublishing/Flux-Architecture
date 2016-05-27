'use strict';

import first from './stores/first';
import second from './stores/second';
import { nameCaps } from './actions/name-caps';

// Setup references to the state of the
// two stores.
var firstState = first.state;
var secondState = second.state;

first.on('change', () => {
  console.log('firstState', firstState.name);
});
// → firstState FOO

second.on('change', () => {
  console.log('secondState', secondState.name);
});
// → secondState foo

second.on('change', (state) => {
  console.log('state', state.name);
});
// → state FOO

nameCaps();

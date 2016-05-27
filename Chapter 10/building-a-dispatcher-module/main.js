'use strict';

import first from './stores/first';
import second from './stores/second';
import third from './stores/third';

import { foo } from './actions/foo';
import { bar } from './actions/bar';

// Logs the state of each store as it changes...
first.on('change', (state) => {
  console.log('first', state);
});

second.on('change', (state) => {
  console.log('second', state);
});

third.on('change', (state) => {
  console.log('third', state);
});

foo();
// →
// third {foo: "updated"}
// second {foo: true}
// first {foo: true}

bar();
// →
// second {foo: "updated"}
// first {bar: true, foo: true}

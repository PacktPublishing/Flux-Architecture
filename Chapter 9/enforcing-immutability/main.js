'use strict';

import copy from './stores/copy';
import constant from './stores/constant';
import frozen from './stores/frozen';

import { myAction } from './actions/my-action';

copy.on('change', (state) => {
  console.assert(state !== copyState, 'copy same');
  console.assert(state.fourth, 'copy missing fourth');
});

constant.on('change', (state) => {
  console.assert(state !== constantState, 'constant same');
  // → Assertion failed: constant same

  console.assert(state.fourth, 'constant missing fourth');
});

frozen.on('change', (state) => {
  console.assert(state !== frozenState, 'frozen same');
  console.assert(state.fourth, 'frozen missing fourth');
});

var copyState = copy.state;
var constantState = constant.state;
var frozenState = frozen.state;

copyState.second++;
constantState.second++;

try {
  frozenState.second++;
} catch (err) {
  console.error(err);
  // →
  // TypeError: Cannot assign to read only property
  // 'second' of object
}

copyState.third = 3;
constantState.third = 3;

try {
  frozenState.third = 3;
} catch (err) {
  console.error(err);
  // →
  // TypeError: Can't add property third, object is
  // not extensible
}

console.assert(
  copy.state.second !== copyState.second,
  'copy.second mutated'
);

console.assert(
  constant.state.second !== constantState.second,
  'constant.second mutated'
);
// → Assertion failed: constant.second mutated

myAction({ fourth: 4 });

'use strict';

import { myAction } from './actions/myaction';
import myStore from './stores/mystore';

myStore.on('change', (state) => {
  console.log('changed', state);
});

myAction();
// → changed
// [
//   [ 'A', 1, 'D' ],
//   [ 'B', 2, 'E' ],
//   [ 'C', 3, 'F' ]
// ]

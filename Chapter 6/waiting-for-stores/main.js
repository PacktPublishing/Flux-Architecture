'use strict';

// The order of store imports no longer matters,
// since the stores use the dispatcher to
// explicitly handle dependency resolution.
import first from './stores/first';
import second from './stores/second';
import { myAction } from './actions/my-action';

// The first store changed...
first.on('change', () => {
  console.log('first store changed');
});

// The second store changed...
second.on('change', () => {
  console.log('second store changed');
});

// Dispatches "MY_ACTION"...
myAction();

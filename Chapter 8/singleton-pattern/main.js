'use strict';

import { myAction } from './actions/my-action';
import singletonStore from './stores/singleton-store';

// Note that "moduleStore" is a module, with everything
// that it exports, not a class instance.
import * as moduleStore from './stores/module-store';

// Registers a "change" callback with the singleton
// store...
singletonStore.on('change', (state) => {
  console.log('singleton', state.pending);
});

// Registers a "change" callback with the module
// store. Not that it looks and feels exactly
// like a class instance.
moduleStore.on('change', (state) => {
  console.log('module', state.pending);
});

// Triggers the "MY_ACTION" action.
myAction();

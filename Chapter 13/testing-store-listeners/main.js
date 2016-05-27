'use strict';

import { doStuff } from './actions/do-stuff';
import myStore from './stores/my-store';

myStore.on('change', (state) => {
  console.log('state', state);
});

doStuff({ foo: 'bar' });

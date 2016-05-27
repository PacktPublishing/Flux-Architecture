'use strict';

import dispatcher from './dispatcher';
import { asyncFunc, ASYNC } from './actions/async-func';

dispatcher.register((action) => {
  switch (action.type) {
    case ASYNC:
      console.log('origin',
        `"${action.payload.origin}"`);
  }
});

asyncFunc();

'use strict';

import dispatcher from './dispatcher';
import { syncFunc, SYNC } from './actions/sync-func';

dispatcher.register((action) => {
  switch (action.type) {
    case SYNC:
      console.log('payload', `"${action.payload}"`);
  }
});

syncFunc('data');

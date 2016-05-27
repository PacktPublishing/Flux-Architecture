'use strict';

import dispatcher from './dispatcher';
import { FIRST, first } from './actions/first';
import { SECOND, second } from './actions/second';
import { THIRD, third } from './actions/third';

// Logs the specific action payloads as
// they're dispatched.
dispatcher.register((e) => {
  switch(e.type) {
    case FIRST:
      console.log('first', e.payload);
      break;
    case SECOND:
      console.log('second', e.payload);
      break;
    case THIRD:
      console.log('third', e.payload);
      break;
  }
});

first();
// → first [10, 20, 30]

second();
// → second [30, 20, 10]

third();
// → third [30, 20, 10]

third('asc');
// → third [10, 20, 30]

'use strict';

import dispatcher from './dispatcher';
import { FIRST, first, firstCommon } from './actions/first';

// Logs the specific action payloads as
// they're dispatched.
dispatcher.register((e) => {
  switch(e.type) {
    case FIRST:
      console.log('first', e.payload);
      break;
  }
});

// Calls the action creator with a common set
// of aguments. This is the type of code we
// want to avoid repeating all over the place.
first('d', 'e', 'f');
// → first ["a", "b", "c", "d", "e", "f"]

// The exact same thing as the "fist()" call above.
// The common arguments have been partially-applied.
firstCommon();
// → first ["a", "b", "c", "d", "e", "f"]

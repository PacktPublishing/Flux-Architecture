'use strict';

import dispatcher from './dispatcher';
import { FIRST, first } from './actions/first';
import { LAST, last } from './actions/last';

// Logs the payload as actions are dispatched...
dispatcher.register((e) => {
  switch (e.type) {
    case FIRST:
      console.log('first', e.payload.first);
      break;
    case LAST:
      console.log('last', e.payload.last);
      break;
  }
});

// Order of update rounds isn't gauranteed here.
first();
last();
// →
// last Last Name
// first First Name

// With promises, update round order is consistent.
first().then(last);
// →
// first First Name
// last Last Name

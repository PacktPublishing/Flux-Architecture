'use strict';

import dispatcher from './dispatcher';
import connect from './actions/socket-listener';
import { ONE } from './actions/one';
import { TWO } from './actions/two';
import { THREE } from './actions/three';

// Logs the web socket messages that have been
// dispatched as Flux actions.
dispatcher.register((e) => {
  switch (e.type) {
    case ONE:
      console.log('one', e.payload);
      break;
    case TWO:
      console.log('two', e.payload);
      break;
    case THREE:
      console.log('three', e.payload);
      break;
  }
});
// →
// one 1
// two 2
// three 3

// Establishes the web socket connection. Note
// that it's important to connect after everything
// with the Flux dispatcher is setup.
connect();

'use strict';

// Get the action constants and action functions
// that we need.
import { ONE, one } from './one';
import { TWO, two } from './two';
import { THREE, three } from './three';

var ws;
var actions = {};

// Create a mapping of constants to functions
// that the web socket handler can use to call
// the appropriate action creator.
actions[ONE] = one;
actions[TWO] = two;
actions[THREE] = three;

// Connects the web socket...
export default function connect() {
  ws = new WebSocket('ws://127.0.0.1:8000');

  ws.addEventListener('message', (e) => {

    // Parses the message data and uses the
    // "actions" map to call the corresponding
    // action creator function.
    let data = JSON.parse(e.data);
    actions[data.task](data.value);
  });
}

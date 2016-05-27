'use strict';

// Imports the "flux" module.
import * as flux from 'flux';

// Creates a new dispatcher instance.
const dispatcher = new flux.Dispatcher();

// A Flux store with state.
class Store {
  constructor() {

    // The initial state of the store.
    this.state = { clickable: false };

    // All of the state transformations happen
    // here. The "action.type" property is how it
    // determines what changes will take place.
    dispatcher.register((e) => {

      // Depending on the type of action, we
      // use "Object.assign()"" to assign different
      // values to "this.state".
      switch (e.type) {
        case 'show':
          Object.assign(this.state, e.payload,
            { clickable: true });
          break;
        case 'hide':
          Object.assign(this.state, e.payload,
            { clickable: false });
          break;
        default:
          break;
      }
    });
  }
}

// Creates a new store instance.
var store = new Store();

// Dispatches a "show" action.
dispatcher.dispatch({
  type: 'show',
  payload: { display: 'block' }
});

console.log('Showing', store.state);
// → Showing {clickable: true, display: "block"}

// Dispatches a "hide" action.
dispatcher.dispatch({
  type: 'hide',
  payload: { display: 'none' }
});

console.log('Hiding', store.state);
// → Hiding {clickable: false, display: "none"}

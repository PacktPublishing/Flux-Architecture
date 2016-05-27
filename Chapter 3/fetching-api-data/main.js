'use strict';

import dispatcher from './dispatcher';
import homeStore from './stores/home';

// Logs the default state of the store, before
// any actions are triggered against it.
console.log(`user: "${homeStore.state.user}"`);
// → user: ""
console.log('events:', homeStore.state.events);
// → events: []
console.log('navigation:', homeStore.state.navigation);
// → navigation: []

// The "change" event is emitted whenever the state of The
// store changes.
homeStore.on('change', (state) => {
  console.log(`user: "${state.user}"`);
  // → user: "Flux"
  console.log('events:', state.events);
  // → events: ["Completed chapter 1", "Completed chapter 2"]
  console.log('navigation:', state.navigation);
  // → navigation: ["Home", "Settings", "Logout"]
});

// Dispatches a "HOME_LOAD" event, when populates the
// "homeStore" with data in the "payload" of the event.
dispatcher.dispatch({
  type: 'HOME_LOAD',
  payload: {
    user: 'Flux',
    events: [
      'Completed chapter 1',
      'Completed chapter 2'
    ],
    navigation: [
      'Home',
      'Settings',
      'Logout'
    ]
  }
});

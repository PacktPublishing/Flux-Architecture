'use strict';

import {default as dispatcher} from './dispatcher';
import {default as playerStore} from './stores/player';

// Logs the state of the player store when it changes.
playerStore.on('change', (state) => {
  console.log('state', state);
});

// Dispatch a "PLAYER_LOAD" action with more payload
// data than is actually used by the store.
dispatcher.dispatch({
  type: 'PLAYER_LOAD',
  payload: {
    id: 1,
    name: 'Mario',
    score: 527,
    rank: 12
  }
});
// → state {id: 1, name: "Mario"}

'use strict';

// References to registered stores...
const stores = [];

// This is true when the dispatcher is performing
// an update round. By default, it's not busy.
var busy = false;

// This is used by stores so that they can register
// themselves with the dispatcher.
export function register(store) {

  // Don't let a store register itself twice...
  if (stores.includes(store)) {
    throw `Store ${store} already registered`;
  }

  // Adds the "store" reference to "stores".
  stores.push(store);

  // Sorts our stores based on dependencies. If a store
  // depends on another store, the other store is
  // considered "less than" the store. This means that
  // dependencies will be satisfied if the stores are
  // processed in this sort order.
  stores.sort((a, b) => {
    if (a.deps.includes(b)) {
      return 1;
    }

    if (b.deps.includes(a)) {
      return -1;
    }

    return 0;
  });
}

// Used by action creator functions to dispatch an
// action payload.
export function dispatch(payload) {

  // The dispatcher is busy, meaning that we've
  // called "dispatch()" while an update round
  // was already taking place.
  if (busy) {
    throw 'Nested dispatch() call detected';
  }

  // Marks the dispatcher as "busy" before we
  // start calling any store handlers.
  busy = true;

  // The action "type" determines the method
  // that we'll call on a the store.
  let { type } = payload;

  // Iterates over each registered store, looking
  // for a method name that matches "type". If found,
  // then we call it, passing it the "payload" that
  // was dispatched.
  for (let store of stores) {
    if (typeof store[type] === 'function') {
      store[type](payload);
    }
  }

  // The dispatcher isn't busy any more, so unmark it.
  busy = false;
}

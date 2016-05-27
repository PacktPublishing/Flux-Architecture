'use strict';

import MyStore from './stores/my-store';
import MyView from './views/my-view';
import { myAction } from './actions/my-action';

// Holds onto our store and view references...
var stores = [];
var views = [];

// How many items to create and actions to
// dispatch...
var storeCount = 100;
var viewCount = 1000;
var actionCount = 10;

// Setup our Flux infrastructure. This establishes
// all the relevant store listeners and view
// listeners. They all stay active throughout the
// lifetime of the application.
console.time('startup');
for (let i = 0; i < storeCount; i++) {
  let store = new MyStore();
  stores.push(store);

  for (let i = 0; i < viewCount; i++) {
    views.push(new MyView(store));
  }
}
console.timeEnd('startup')
// → startup: 26.286ms

console.log('stores', stores.length);
console.log('views', views.length);
console.log('actions', actionCount);
// →
// stores 100
// views 100000
// actions 10

// Dispatches the actions. This is where we either
// succeed or fail at scaling the architecture.
console.time('dispatch');
for (let i = 0; i < actionCount; i++) {
  myAction();
}
console.timeEnd('dispatch');
// → dispatch: 443.929ms

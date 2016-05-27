'use strict';

import list from './stores/list';
import map from './stores/map';
import { listPush, listCaps } from './actions/list';
import { mapMerge, mapIncr } from './actions/map';

// Logs the items in the "list" store when
// it's state changes.
list.on('change', (state) => {
  for (let item of state) {
    console.log('  list item', item);
  }
});

// Logs the items in the "map" store when
// it's state changes.
map.on('change', (state) => {
  for (let [ key, item ] of state) {
    console.log(`  ${key}`, item);
  }
});

console.log('List push...');
listPush('First', 'Second', 'Third');
// → List push...
//     list item First
//     list item Second
//     list item Third

console.log('List caps...');
listCaps();
// → List caps...
//     list item FIRST
//     list item SECOND
//     list item THIRD

console.log('Map merge...');
mapMerge({ first: 1, second: 2 });
// → Map merge...
//     first 1
//     second 2

console.log('Map increment...');
mapIncr();
// → Map increment...
//     first 2
//     second 3

'use strict';

import users from './stores/users';
import { sortNames } from './actions/sort-names';

// Logs the user names...
users.on('change', ({names}) => {
  for (let item of names) {
    console.log('  name', item);
  }
});

console.log('Ascending...');
sortNames();
// → Ascending...
//     name First
//     name Second
//     name Third

console.log('Descending...');
sortNames(true);
// → Descending...
//     name Third
//     name Second
//     name First

'use strict';

import dispatcher from './dispatcher';

// This code never has to change, although the actual
// function that's exported will change, depending on
// the "MOCK" setting.
import { loadUsers } from './actions/load-users';

dispatcher.register((e) => {
  console.log('Users', e.payload.map(x => x.name));
});

loadUsers();
// → Users ["Mock 1", "Mock 2"]
// When the "MOCK" setting is set to true...
// → Users ["Prod 1", "Prod 2"]

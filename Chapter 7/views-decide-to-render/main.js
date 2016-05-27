'use strict';

import myView from './views/my-view';
import { nameCaps } from './actions/name-caps';

// Despite repeated calls to "nameCaps()",
// "myView" is only rendered once.
nameCaps();
nameCaps();
nameCaps();
// → name FOO

'use strict';

import {Dispatcher} from 'flux';

// Exports the singleton Flux dispatcher instance as
// the default module value. This can be imported
// like: "import {default as dispatcher} from './dispatcher';"
export default new Dispatcher();

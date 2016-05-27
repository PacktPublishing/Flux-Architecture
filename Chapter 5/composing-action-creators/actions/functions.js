'use strict';

import { start as _start } from './start';
import { starting } from './starting';
import { stop as _stop } from './stop';
import { stopping } from './stopping';

// The "start()" function now automatically
// calls "starting()".
export function start() {
  starting();
  _start();
}

// The "stop()" function now automatically
// calls "stopping()"
export function stop() {
  stopping();
  _stop();
}

// Export "starting()" and "stopping()" so
// that they can still be used on their
// own, or composed into other functions.
export { starting, stopping };

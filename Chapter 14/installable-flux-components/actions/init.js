'use strict';

import dispatcher from '../dispatcher';

export const INIT = 'INIT';

export function init() {
  dispatcher.dispatch({ type: INIT });
}

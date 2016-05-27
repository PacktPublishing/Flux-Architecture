'use strict'

import dispatcher from '../dispatcher';

export const STARTING = 'STARTING';

export function starting() {
  dispatcher.dispatch({ type: STARTING });
}

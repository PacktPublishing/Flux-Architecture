'use strict'

import dispatcher from '../dispatcher';

export const STOPPING = 'STOPPING';

export function stopping() {
  dispatcher.dispatch({ type: STOPPING });
}

'use strict';

import dispatcher from '../dispatcher';

export const DO_STUFF = 'DO_STUFF';

export function doStuff(payload) {
  dispatcher.dispatch({
    type: DO_STUFF,
    payload
  });
}

'use strict'

import {dispatch} from '../dispatcher';

// The action identifier...
export const BAR = 'BAR';

export function bar(payload) {
  dispatch({
    type: BAR,
    payload: payload
  });
}

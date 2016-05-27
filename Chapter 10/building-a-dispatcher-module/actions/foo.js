'use strict'

import {dispatch} from '../dispatcher';

// The action identifier...
export const FOO = 'FOO';

export function foo(payload) {
  dispatch({
    type: FOO,
    payload: payload
  });
}

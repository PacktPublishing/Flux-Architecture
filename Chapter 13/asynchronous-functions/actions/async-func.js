'use strict';

import dispatcher from '../dispatcher';
import request from '../request';

export const ASYNC = 'ASYNC';

// Makes a "request()" call (which is really
// just an alias for "fetch()") and dispatches
// the "ASYNC" action with the JSON response
// as the action payload.
export function asyncFunc() {
  return request('https://httpbin.org/ip')
    .then(resp => resp.json())
    .then(resp => dispatcher.dispatch({
      type: ASYNC,
      payload: resp
    }));
}

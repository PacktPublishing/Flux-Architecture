'use strict'

import dispatcher from '../dispatcher';

// The mock API functions we need.
import {
  first,
  second,
  third
} from './api';

// The action identifier...
export const MY_ACTION = 'MY_ACTION';

export function myAction() {

  // Calls all three APIs, which all resolve
  // after different delay times. The "Promise.all()"
  // method synchronizes them and returns a new promise.
  Promise.all([
    first(),
    second(),
    third()
  ]).then((values) => {

    // These are the resolved values...
    let [ first, second, third ] = values;

    // All three API calls have resolved, meaning we
    // can now dispatch "MY_ACTION" with the three
    // resolved async values as the payload.
    dispatcher.dispatch({
      type: MY_ACTION,
      payload: {
        first: first,
        second: second,
        third, third
      }
    });
  });
}

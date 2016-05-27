'use strict'

import dispatcher from '../dispatcher';
import partial from 'lodash/partial';

// The action identifier...
export const FIRST = 'FIRST';

// The generic implementation of the action creator.
export function first(...values) {

  // The payload data.
  let defaults = [ 'a', 'b', 'c' ];

  // Dispatches the "FIRST" action with
  // the "values" array concatenated to
  // the "defaults" array.
  dispatcher.dispatch({
    type: FIRST,
    payload: defaults.concat(values)
  });
}

// Exports a common version of "first()" with
// the common arguments already applied.
export const firstCommon = partial(first, 'd', 'e', 'f');

'use strict';

import dispatcher from '../dispatcher';
import { PAYLOAD_SORT } from './payload-defaults';

// The action name.
export const SORT_TASKS = 'SORT_TASKS';

// This action creator function is using
// the "PAYLOAD_SORT" default object as the
// payload.
export function sortTasks() {
  dispatcher.dispatch({
    type: SORT_TASKS,
    payload: PAYLOAD_SORT
  });
}

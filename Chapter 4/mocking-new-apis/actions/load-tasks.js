'use strict';

import dispatcher from '../dispatcher';

// The action identifier...
export const LOAD_TASKS = 'LOAD_TASKS';

// Immediately dispatches the action using an array
// of task objects as the mock data.
export function loadTasks() {
  dispatcher.dispatch({
    type: LOAD_TASKS,
    payload: [
      { id: 1, name: 'Task 1', state: 'running' },
      { id: 2, name: 'Task 2', state: 'queued' },
      { id: 3, name: 'Task 3', state: 'finished'}
    ]
  });
}

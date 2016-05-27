'use strict';

import taskStore from './stores/task';
import { loadTasks } from './actions/load-tasks';
import { unTask } from './actions/run-task';

// Logs the state of the store, as a mapped array
// of strings.
taskStore.on('change', (state) => {
  console.log('tasks',
    state.map(x => `${x.name} (${x.state})`));
});

loadTasks();
// →
// tasks [
//   "Task 1 (running)",
//   "Task 2 (queued)",
//   "Task 3 (finished)"
// ]

runTask();
// →
// tasks [
//   "Task 1 (running)",
//   "Task 2 (running)",
//   "Task 3 (finished)"
// ]

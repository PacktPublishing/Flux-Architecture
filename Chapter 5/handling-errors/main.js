'use strict';

import dispatcher from './dispatcher';
import {
  UPDATE_TASK,
  UPDATE_TASK_ERROR,
  updateTask,
  updateTaskError
} from './actions/update-task';

// Logs the payload as actions are dispatched...
dispatcher.register((e) => {
  switch (e.type) {
    case UPDATE_TASK:
      console.log('task updated');
      break;
    case UPDATE_TASK_ERROR:
      console.error(e.payload);
      break;
  }
});

// We can tell "updateTask()" how to respond when
// the underlying API call fails.
updateTask().catch(updateTaskError);
// → Failed to update task

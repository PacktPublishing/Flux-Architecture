'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const UPDATE_TASK = 'UPDATE_TASK';

// The action error identifier...
export const UPDATE_TASK_ERROR = 'UPDATE_TASK_ERROR';

// Returns a promise that's rejected with an error
// message after 0.5 seconds.
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Failed to update task');
    }, 500);
  });
}

export function updateTask() {
  return new Promise((resolve, reject) => {

    // Dispatches the "UPDATE_TASK" action as usual
    // when the promise resolves. Then resolves
    // the promise returned by "updateTask()".
    api().then((response) => {
      dispatcher.dispatch({
        type: UPDATE_TASK
      });

      resolve();

    // If the API promise rejects, reject the promise
    // returned by "updateTask()" as well.
    }, (error) => {
      reject(error);
    });
  });
}

// A basic helper action creator for when the
// "updateTask()" function is rejected.
export function updateTaskError(error) {
  dispatcher.dispatch({
    type: UPDATE_TASK_ERROR,
    payload: error
  });
}

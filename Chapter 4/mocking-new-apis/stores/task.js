'use strict';

import EventEmitter from 'events';
import dispatcher from '../dispatcher';
import { LOAD_TASKS } from '../actions/load-tasks';
import { RUN_TASK } from '../actions/run-task';

// The store for tasks displayed in the application.
class TaskStore extends EventEmitter {
  constructor() {
    super();

    this.state = [];

    dispatcher.register((e) => {
      switch(e.type) {

        // In the case of "LOAD_TASKS", we can use the
        // "payload" as the new store state.
        case LOAD_TASKS:
          this.state = e.payload;
          this.emit('change', this.state);
          break;

        // In the case of "RUN_TASK", we need to look
        // up a specific task object and change it's state.
        case RUN_TASK:
          let task = this.state.find(
            x => x.id === e.payload.id);
          task.state = e.payload.state;
          this.emit('change', this.state);
          break;
      }
    });
  }
}

export default new TaskStore();

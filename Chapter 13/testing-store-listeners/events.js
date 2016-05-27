'use strict';

// In order to mock the Node "EventEmitter" API,
// we need to expose it through on of our own modules.
import { EventEmitter } from 'events';
export { EventEmitter as EventEmitter } ;

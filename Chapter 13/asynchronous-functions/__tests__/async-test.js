'use strict';

jest.unmock('../actions/async-func');

// The "dispatcher" is mock while "asyncFunc()"
// is not.
import dispatcher from '../dispatcher';
import { asyncFunc } from '../actions/async-func';

describe('asyncFunc()', () => {

  // For testing asynchronous code that returns
  // promises, we use "pit()" in place of "it()".
  pit('dispatch', () => {

    // Once the call to "asyncFunc()" has resolved,
    // we can perform our test assertions.
    return asyncFunc().then(() => {

      // Collect stats about he mock
      // "dispatch()" method.
      const { calls } = dispatcher.dispatch.mock;
      const { type, payload } = calls[0][0];

      // Make sure that the asynchronous function
      // dispatches an action with the appropriate
      // payload.
      expect(calls.length).toBe(1);
      expect(type).toBe('ASYNC');
      expect(payload.origin).toBe('localhost');
    });
  });
});

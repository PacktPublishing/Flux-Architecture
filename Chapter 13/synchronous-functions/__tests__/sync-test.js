'use strict';

// We want to test the real "syncFunc()" implementation.
jest.unmock('../actions/sync-func');

import dispatcher from '../dispatcher';
import { syncFunc } from '../actions/sync-func';

// The "dispatch()" method is mocked by
// Jest. We'll use it in the test to validate
// our action.
const { dispatch } = dispatcher;

describe('syncFunc()', () => {
  it('calls dispatch()', () => {

    // Calling "syncFunc()" should dispatch an
    // action. We can verify this by making sure
    // that the "dispatch()" was called.
    syncFunc('data');
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('calls dispatch() with correct payload', () => {
    syncFunc('data');

    // After calling "syncFunc()", we can get
    // argument information from the mock.
    const args = dispatch.mock.calls[1];
    const [ action ] = args;

    // Make sure the correct information was
    // passed to the dispater.
    expect(action).toBeDefined();
    expect(action.type).toBe('SYNC');
    expect(action.payload).toBe('data');
  });
});

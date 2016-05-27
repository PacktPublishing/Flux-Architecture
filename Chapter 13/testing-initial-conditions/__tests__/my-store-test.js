'use strict';

// We want to test the real store...
jest.unmock('../stores/my-store');

import myStore from '../stores/my-store';

describe('MyStore', () => {
  it('does stuff', () => {

    // Directly calls the store method that's
    // registered with the dispatcher, passing it
    // the same type of data that the dispatcher
    // would.
    myStore.onAction({
      type: 'DO_STUFF',
      payload: { foo: 'bar' }
    });

    // Get some of the mocked "emit()" call info...
    const calls = myStore.emit.mock.calls;
    const [ args ] = calls;

    // We can now assert that the store emits a
    // "change" event and that it has the correct info.
    expect(calls.length).toBe(1);
    expect(args[0]).toBe('change');
    expect(args[1].foo).toBe('bar');
  });
});

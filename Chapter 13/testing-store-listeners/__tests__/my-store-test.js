'use strict';

// We want to test the real store...
jest.unmock('../stores/my-store');

import MyStore from '../stores/my-store';

describe('MyStore', () => {

  // The default initial state of the store is
  // powered off. This test makes sure that
  // dispatching the "POWER_ON" action changes the
  // power state of the store.
  it('powers on', () => {
    let myStore = new MyStore();

    myStore.onAction({ type: 'POWER_ON' });

    expect(myStore.state.power).toBe('on');
    expect(myStore.state.busy).toBe(false);
    expect(myStore.emit.mock.calls.length).toBe(1);
  });

  // This test changes the initial state of the store
  // when it is first instantiated. The initial state
  // is now powered off, and we've also marked the
  // store as busy. This test makes sure that the
  // logic of the store works as expected - the state
  // shouldn't change, and no events are emitted.
  it('does not powers off if busy', () => {
    let myStore = new MyStore({
      power: 'on',
      busy: true
    });

    myStore.onAction({ type: 'POWER_OFF' });

    expect(myStore.state.power).toBe('on');
    expect(myStore.state.busy).toBe(true);
    expect(myStore.emit.mock.calls.length).toBe(0);
  });

  // This test is just like the one above, only the
  // "busy" property is false, which means that we
  // should be able to power off the store when the
  // "POWER_OFF" action is dispatched.
  it('does not powers off if busy', () => {
    let myStore = new MyStore({
      power: 'on',
      busy: false
    });

    myStore.onAction({ type: 'POWER_OFF' });

    expect(myStore.state.power).toBe('off');
    expect(myStore.state.busy).toBe(false);
    expect(myStore.emit.mock.calls.length).toBe(1);
  });
});

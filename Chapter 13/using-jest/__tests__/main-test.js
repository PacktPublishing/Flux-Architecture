'use strict';

jest.unmock('../main');

// The "main" module is the real deal. The
// "sayHello()" function is a mock.
import '../main';
import sayHello from '../hello';

describe('main', () => {

  // We're expecting the "main" module to call
  // "sayHello()" exactly once. Since the "sayHello()"
  // function we've imported here is the same mock
  // called by main, we can verify this is indeed
  // what main is actually doing.
  it('calls sayHello()', () => {
    expect(sayHello.mock.calls.length).toBe(1);
  });
});

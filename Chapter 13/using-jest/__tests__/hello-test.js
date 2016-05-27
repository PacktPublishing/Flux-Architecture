'use strict';

// Tells Jest that we want the real "hello"
// module, not the mocked version.
jest.unmock('../hello');

// Imports the function we want to test.
import sayHello from '../hello';

// Your typical Jasmine test suite, test cases,
// and test assertions.
describe('sayHello()', () => {
  it('says hello world', () => {
    expect(sayHello()).toBe('Hello World!');
  });

  it('says hello flux', () => {
    expect(sayHello('Flux')).toBe('Hello Flux!');
  });
});

'use strict';

// Exports the mocked version of the "request()"
// function our action creators use. In this case,
// we're emulating the "fetch()" function and the
// "Response" object that it resolves.
export default function request() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve({
        json: () => new Promise((resolve, reject) => {

          // This is where we put all of our mock fetch
          // data. A given function should just test
          // the properties that it's interested in,
          // ignoring the rest.
          resolve({ origin: 'localhost' });
        })
      });
    });
  });
}

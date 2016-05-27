'use strict';

// A really simple view...
export default class MyView {
  constructor(store) {

    // Do nothing except verify that there's
    // a "result" state property.
    store.on('change', ({ result }) => {
      console.assert(
        Number.isInteger(result),
        'MyView'
      );
    });
  }
}

'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const LOAD_DOC = 'LOAD_DOC';

// Loads the name of a specific document.
export function loadDoc(id) {

  // The API data resolves raw document data...
  new Promise((resolve, reject) => {
    resolve([
      { id: 1, name: 'Doc 1' },
      { id: 2, name: 'Doc 2' },
      { id: 3, name: 'Doc 3' }
    ]);
  }).then((docs) => {

    // The payload contains both the raw document
    // collection and the specific document "id".
    // The generic "docs" store uses the raw
    // "docs" data while the specific store depends
    // on this generic collection.
    dispatcher.dispatch({
      type: LOAD_DOC,
      payload: {
        id: id,
        docs: docs
      }
    });
  });
}

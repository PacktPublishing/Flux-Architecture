'use strict';

// We have to import the generic "docsStore", even though
// we're not using it here, so that it can register with
// the dispatcher and respond to "LOAD_DOC" actions.
import docsStore from './stores/docs';
import docStore from './stores/doc';
import { loadDoc } from './actions/load-doc';

// Logs the data our specific store gets from
// the generic store.
docStore.on('change', (state) => {
  console.log('name', `"${state.name}"`);
});

// Load the document with an id of 2.
loadDoc(2);
// → name "Doc 2"

'use strict';

import dispatcher from './dispatcher';
import panelStore from './stores/panel';

// Logs the state of the "panelStore" when it changes.
panelStore.on('change', (state) => {
  console.log('visible', state.visible);
  console.log('selected', state.items.filter(
    x => x.selected));
});

// This will select the first item.
dispatcher.dispatch({
  type: 'ITEM_SELECT',
  payload: 0
});
// → visible true
// → selected [ { name: First, selected: true } ]

// This disables the panel by toggling the "visible"
// property value.
dispatcher.dispatch({ type: 'PANEL_TOGGLE' });
// → visible false
// → selected [ { name: First, selected: true } ]

// Nothing the second item isn't actually selected,
// because the panel is disabled. No "change" event
// is emitted here either, because the "visible"
// property is false.
dispatcher.dispatch({
  type: 'ITEM_SELECT',
  payload: 1
});

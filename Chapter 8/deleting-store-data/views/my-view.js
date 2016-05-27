'use strict';

import React from 'react';
import { hideAll, hideOdd } from '../actions/hide';

// The view function, renders a button
// that deletes store data by dispatching
// the "HIDE_ALL" action, and renders a list
// of items. The hide odds button only deletes
// some store data by disptaching the "HIDE_ODD"
// action.
export default ({ items }) => (
  <div>
    <button onClick={hideAll}>Hide All</button>
    <button onClick={hideOdd}>Hide Odd</button>
    <ul>
      {items.map(item =>
        <li key={item}>{item}</li>
      )}
    </ul>
  </div>
);

'use strict';

import React from 'react';
import { sort } from '../actions/sort';

// Some inline styles for the React view...
var style = {
  textTransform: 'capitalize'
};

// Renders a "button" element, with the
// "direction" store state as the label
// and the "sort()" action creator function
// is called when the button is clicked.
export default ({ direction }) => (
  <button
    style={style}
    onClick={sort}>{direction}
  </button>
);

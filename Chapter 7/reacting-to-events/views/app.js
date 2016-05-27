'use strict';

import React from 'react';
import Sort from './sort';
import Item from './item';

// The application view. Renders a sort
// button and a list of "Item" components.
export default ({ items, direction }) => (
  <div>
    <Sort direction={direction}/>
    <ul>
      {items.map(item =>
        <Item key={item}>{item}</Item>)}
    </ul>
  </div>
);

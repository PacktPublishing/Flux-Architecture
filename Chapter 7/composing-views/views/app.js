'use strict';

import React from 'react';
import Item from './item';

// The application view. Renders a list of
// "Item" components.
export default ({ items }) => (
  <ul>
    {items.map(item =>
      <Item key={item}>{item}</Item>)}
  </ul>
);

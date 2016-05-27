'use strict';

import React from 'react';

// The stateless version of the React
// component is a much stripped-down
// version of a class component. Since
// it only relies on propertites passed
// into it, it can be a basic arrow function
// that returns a React element.
export default ({ items }) => (
  <ul>
    {items.map(item =>
      <li key={item}>{item}</li>)}
  </ul>
);

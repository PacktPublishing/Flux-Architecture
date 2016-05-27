'use strict';

import React from 'react';
import { Link } from 'react-router';

// Renders some links to the routes in the app.
// The "props.children" are any sub-components.
export default (props) => (
  <div>
    <ul>
      <li><Link to="/first">First</Link></li>
      <li><Link to="/second">Second</Link></li>
    </ul>
    {props.children}
  </div>
);

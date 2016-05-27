'use strict';

import React from 'react';

// An "li" component with "strong" text.
export default (props) => (
  <li>
    <strong>{props.children}</strong>
  </li>
);

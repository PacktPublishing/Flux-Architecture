'use strict';

import React from 'react';

// A simple React view that displays a list
// of groups...
export default ({ groups }) => (
  <ul>
    {groups.map(group =>
      <li key={group}>{group}</li>
    )}
  </ul>
);

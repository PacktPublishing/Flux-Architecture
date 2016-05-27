'use strict';

import React from 'react';

// A simple React view that displays a list of
// users.
export default ({ users }) => (
  <ul>
    {users.map(({ name, groupName }) =>
      <li key={name}>{name} ({groupName})</li>
    )}
  </ul>
);

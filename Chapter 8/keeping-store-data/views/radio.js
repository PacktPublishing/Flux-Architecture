'use strict';

import React from 'react';
import { id } from '../util';
import { showUsers, showGroups } from '../actions/show';

// This react view displays the two radio
// buttons that determine which list to display.
// Note that they're both using "map()" even
// though it's a single item array. This is to
// keep the logic in the store and out of the view.
export default ({users, groups}) => (
  <div>
    {users.map(user =>
      <label key={id.next()}>
        {user.label}
        <input
          type="radio"
          name="display"
          checked={user.checked}
          onChange={showUsers}
        />
      </label>
    )}
    {groups.map(group =>
      <label key={id.next()}>
        {group.label}
        <input
          type="radio"
          name="display"
          checked={group.checked}
          onChange={showGroups}
        />
      </label>
    )}
  </div>
);

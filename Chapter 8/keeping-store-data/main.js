'use strict';

import React from 'react';
import { render } from 'react-dom';

import radio from './stores/radio';
import users from './stores/users';
import groups from './stores/groups';

import Radio from './views/radio';
import Users from './views/users';
import Groups from './views/groups';

// The container DOM element...
var container = document.getElementById('app');

// Renders the React components. The state for the
// Flux stores are passed in as props.
function renderApp(
  radioState=radio.state,
  usersState=users.state,
  groupsState=groups.state
) {
  render(
    <div>
      <Radio
        users={radioState.users}
        groups={radioState.groups}/>
      <Users
        users={usersState.users}/>
      <Groups
        groups={groupsState.groups}/>
    </div>,
    container
  );
}

// Renders the app with the new "radio" state.
radio.on('change', (state) => {
  renderApp(state, users.state, groups.state);
});

// Renders the app with the new "users" state.
users.on('change', (state) => {
  renderApp(radio.state, state, groups.state);
});

// Renders the app with the new "groups" state.
groups.on('change', (state) => {
  renderApp(radio.state, users.state, state);
});

// Initial app rendering...
renderApp();

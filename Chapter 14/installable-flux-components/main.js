'use strict';

// The React components we need...
import React from 'react';
import { render } from 'react-dom';

// The stores and views from our "feature packages".
import { Users, ListUsers } from 'my-users';
import { Groups, ListGroups } from 'my-groups';

// The components that are core to the application...
import dispatcher from './dispatcher';
import AppData from './stores/app';
import App from './views/app';
import { init } from './actions/init';

// Constructs the Flux stores, passing in the
// dispatcher as an argument. This is how we're
// able to get third-party Flux components to
// talk to our application and vice-versa.
const app = new AppData(dispatcher);
const users = new Users(dispatcher);
const groups = new Groups(dispatcher);

// Re-render the application when the store
// changes state.
app.on('change', renderApp);
users.on('change', renderApp);
groups.on('change', renderApp);

// Renders the "App" React component, and it's
// child components. The dispatcher is passed
// to the "ListUsers" and the "ListGroups"
// components since they come from different
// packages.
function renderApp() {
  render(
    <App {...app.state}>
      <ListUsers
        dispatcher={dispatcher}
        {...users.state}
      />
      <ListGroups
        dispatcher={dispatcher}
        {...groups.state}
      />
    </App>,
    document.getElementById('app')
  );
}

// Dispatches the "INIT" action, so that the
// "App" store will populate it's state.
init();

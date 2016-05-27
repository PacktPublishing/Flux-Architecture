'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './views/app';
import First from './views/first';
import Second from './views/second';
import { routeUpdate } from './actions/route-update';

// The containiner element for our application.
var appContainer = document.getElementById('app');

// Called by the "Router" whenever a route changes.
// This is where we call the action creator
// "routeUpdate()", passing it the path of the
// new route.
function onUpdate() {
  routeUpdate(this.state.location.pathname);
}

// Renders the router components. Each route
// has an associated React component that's
// rendered when the route is activated.
render((
  <Router onUpdate={onUpdate}>
    <Route path="/" component={App}>
      <IndexRoute component={First}/>
      <Route path="first" components={First}/>
      <Route path="second" component={Second}/>
    </Route>
  </Router>
), appContainer);

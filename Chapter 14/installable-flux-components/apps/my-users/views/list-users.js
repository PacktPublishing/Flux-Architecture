'use strict';

import React from 'react';
import { LOAD_USER } from '../actions/load-user';

// The "click" event handler for items in the users
// list. The dispatcher is passed in as an argument
// because this Flux package doesn't have a dispatcher,
// it relies on the one from the application.
//
// The "id" of the user that was clicked is also passed
// in as an argument. Then the "LOAD_USER" action
// is dispatched.
function onClick(dispatcher, id, e) {
  e.preventDefault();

  dispatcher.dispatch({
    type: LOAD_USER,
    payload: id
  });
}

// Renders the component using data from the store
// state that was passed in as props.
export default ({ header, users, dispatcher }) => (
  <div>
    {header.map(h => <h1 key={h}>{h}</h1>)}
    <ul>{users.map(({ id, name }) =>
      <li key={id}>
        <a
          href="#"
          onClick={
            onClick.bind(null, dispatcher, id)
          }>{name}
        </a>
      </li>
    )}</ul>
  </div>
)

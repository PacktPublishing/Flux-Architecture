'use strict';

import React from 'react';
import { LOAD_GROUP } from '../actions/load-group';

function onClick(dispatcher, id, e) {
  e.preventDefault();

  dispatcher.dispatch({
    type: LOAD_GROUP,
    payload: id
  });
}

export default ({ header, groups, dispatcher }) => (
  <div>
    {header.map(h => <h1 key={h}>{h}</h1>)}
    <ul>{groups.map(({ id, name }) =>
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

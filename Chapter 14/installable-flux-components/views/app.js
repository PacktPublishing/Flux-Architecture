'use strict';

import React from 'react';
import dispatcher from '../dispatcher';

// The "onClick()" click handler will dispatch
// the given action. This argument is bound when
// the link is rendered. Actions that are dispatched
// from this function can be handled by other packages
// that are sharing this same dispatcher.
function onClick(type, e) {
  e.preventDefault();
  dispatcher.dispatch({ type });
}

// Renders the main navigation links, and
// any child elements. Nothing is rendered
// if the store state is empty.
export default ({ header, links, children }) => (
  <div>
    {header.map(title => <h1 key={title}>{title}</h1>)}
    <ul>{
      links.map(({ title, action }) =>
        <li key={action}>
          <a
            href="#"
            onClick={onClick.bind(null, action)}>{title}
          </a>
        </li>
      )
    }</ul>
    {children}
  </div>
);

'use strict'

import dispatcher from '../dispatcher';

// The action identifiers...
export const ROUTE_UPDATE = 'ROUTE_UPDATE';
export const PRE_ROUTE_UPDATE = 'PRE_ROUTE_UPDATE';

export function routeUpdate(payload) {

  // Immediately dispatch the "PRE_ROUTE_UPDATE"
  // action, giving stores a chance to adjust
  // their state while asynchronous activities happen.
  dispatcher.dispatch({
    type: PRE_ROUTE_UPDATE,
    payload: payload
  });

  // Dispatches the "ROUTE_UPDATE" action
  // after one second.
  setTimeout(() => {
    dispatcher.dispatch({
      type: ROUTE_UPDATE,
      payload: payload
    });
  }, 1000);
}

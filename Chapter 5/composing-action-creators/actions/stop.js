'use strict'

import dispatcher from '../dispatcher';

export const STOP = 'STOP';

export function stop() {
  let api = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });

  api.then((response) => {
    dispatcher.dispatch({ type: STOP });
  });
}

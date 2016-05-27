'use strict';

import dispatcher from '../dispatcher';

export const POWER_ON = 'POWER_ON';

export function powerOn() {
  dispatcher.dispatch({
    type: POWER_ON
  });
}

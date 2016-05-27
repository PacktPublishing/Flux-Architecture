'use strict';

import dispatcher from '../dispatcher';

export const POWER_OFF = 'POWER_OFF';

export function powerOff() {
  dispatcher.dispatch({
    type: POWER_OFF
  });
}

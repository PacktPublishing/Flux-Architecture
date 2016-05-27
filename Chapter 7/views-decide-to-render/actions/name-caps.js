'use strict'

import dispatcher from '../dispatcher';

// The action identifier...
export const NAME_CAPS = 'NAME_CAPS';

export function nameCaps() {
  dispatcher.dispatch({ type: NAME_CAPS });
}

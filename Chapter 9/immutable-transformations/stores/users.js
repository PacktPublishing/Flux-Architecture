'use strict';

import { EventEmitter } from 'events';
import Immutable from 'Immutable';

import dispatcher from '../dispatcher';
import { SORT_NAMES } from '../actions/sort-names';

// The state is an object with two immutable
// list instances. The first is a list of user
// maps. The second is a list of user names and
// is empty by default.
const state = {
  users: Immutable.List([
    Immutable.Map({ id: 33, name: 'tHiRd' }),
    Immutable.Map({ id: 22, name: 'sEcoNd' }),
    Immutable.Map({ id: 11, name: 'firsT' })
  ]),
  names: Immutable.List()
};

class Users extends EventEmitter {
  constructor() {
    super();

    this.id = dispatcher.register((e) => {
      switch(e.type) {

        // The "SORT_NAMES" action was dispatched...
        case SORT_NAMES:

          // Determines the "sort" multiplier that's passed
          // to "sortBy()" to sort in ascending or
          // descending direction.
          let sort = e.payload === 'desc' ? -1 : 1;

          // Assigns the sorted list to "users" after
          // performing a series of transforms. The
          // "toSeq()" and "toList()" calls aren't strictly
          // necessary. Any calls inbetween them, however,
          // don't result in new structures being created.
          state.names = state.users
            .sortBy(x => x.get('id') * sort)
            .toSeq()
            .map(x => x.get('name'))
            .map(x => `${x[0].toUpperCase()}${x.slice(1)}`)
            .map(x => `${x[0]}${x.slice(1).toLowerCase()}`)
            .toList();

          this.emit('change', state);
          break;
      }
    });
  }

  get state() {
    return state;
  }
}

export default new Users();

'use strict';

import dispatcher from '../dispatcher';
import settingsStore from '../stores/settings';

// This is a "bare bones" view because it's
// not rendering anything to the DOM. We're just
// using it to validate our Flux data-flows and
// to think about potential actions dispatched
// from this view.
class SettingsView {
  constructor() {

    // Logs the state of "settingsStore" when it
    // changes.
    settingsStore.on('change', (state) => {
      console.log('settings', state);
    });

    // The initial state of the store is logged.
    console.log('settings', settingsStore.state);
  }

  // This sets an email value by dispatching
  // a "SET_EMAIL" action.
  setEmail(email) {
    dispatcher.dispatch({
      type: 'SET_EMAIL',
      payload: 'foo@bar.com'
    });
  }

  // Do all the things!
  doTheThings() {
    dispatcher.dispatch({
      type: 'DO_THE_THINGS',
      payload: true
    })
  }
}

// We don't need more than one of these
// views, so export a new instance.
export default new SettingsView();

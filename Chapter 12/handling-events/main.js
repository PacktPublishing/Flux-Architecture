'use strict';

import $ from 'jquery';

import ListView from './views/list-view';

// Performs the initial rendering of
// the list view, after initializing
// the view using the "#app" element.
new ListView($('#app')).render();

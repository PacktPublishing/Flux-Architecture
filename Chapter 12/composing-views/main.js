'use strict';

import $ from 'jquery';

import { reverse } from './actions/reverse';
import ListView from './views/list-view';

// Performs the initial rendering of
// the list view, after initializing
// the view using the "#app" element.
new ListView($('#app')).render();

// Every second, toggle the sort
// order of the list by re-rendering
// the main template and it's partial
// templates.
setInterval(reverse, 1000);

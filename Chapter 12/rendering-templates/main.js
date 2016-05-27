'use strict';

import $ from 'jquery';

import { myAction } from './actions/my-action';
import MyView from './views/my-view';

// Constructs the new view and performs the
// initial render by calling "render()". Note
// that there's now stored reference to this view,
// because we don't actually need to. If we
// did, "render()" returns the view instance.
new MyView($('#app')).render();

// After 1 second, dispatch "MY_ACTION", which
// will replace the "loading..." labels.
setTimeout(() => {
  myAction({
    first: 'Face',
    last: 'Book'
  });
}, 1000);

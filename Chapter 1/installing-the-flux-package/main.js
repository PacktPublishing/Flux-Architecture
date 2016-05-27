// Imports the "flux" module.
import * as flux from 'flux';

// Creates a new dispatcher instance. "Dispatcher" is
// the only useful construct found in the "flux" module.
const dispatcher = new flux.Dispatcher();

// Registers a callback function, invoked every time
// an action is dispatched.
dispatcher.register((e) => {
  var p;

  // Determines how to respond to the action. In this case,
  // we're simply creating new content using the "payload"
  // property. The "type" property determines how we create
  // the content.
  switch (e.type) {
    case 'hello':
      p = document.createElement('p');
      p.textContent = e.payload;
      document.body.appendChild(p);
      break;
    case 'world':
      p = document.createElement('p');
      p.textContent = `${e.payload}!`;
      p.style.fontWeight = 'bold';
      document.body.appendChild(p);
      break;
    default:
      break;
  }
});

// Dispatches a "hello" action.
dispatcher.dispatch({
  type: 'hello',
  payload: 'Hello'
});

// Dispatches a "world" action.
dispatcher.dispatch({
  type: 'world',
  payload: 'World'
});

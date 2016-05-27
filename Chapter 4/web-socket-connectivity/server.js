'use strict';

// The HTTP server...
var server = require('http').createServer();

// The web socket server...
var ws = new require('ws').Server({
  server: server,
});

// Makes life worth living...
var express = require('express');
var app = express();

// So we can serve "index.html"...
app.use(express.static(__dirname));

// Handler for when a client connects via web socket.
ws.on('connection', function connection(ws) {
  let i = 0;
  const names = [ null, 'one', 'two', 'three' ];

  // Sends the client 3 messages, spaced by 1 second
  // intervals.
  function interval() {
    if (++i < 4) {
      ws.send(JSON.stringify({
        value: i,
        task: names[i]
      }));

      setTimeout(interval, 1000);
    }
  }

  setTimeout(interval, 1000);
});

// Fire up the HTTP and web socket servers.
server.on('request', app);
server.listen(8000, () => {
  console.log('Listening on', server.address().port)
});

'use strict';

const fs = require('fs')
const glob = require('glob');

glob('../**/main-bundle.*', (err, files) => {
  for (let file of files) {
    fs.unlink(file);
  }
});

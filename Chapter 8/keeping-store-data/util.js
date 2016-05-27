'use strict';

function* idGen() {
  let id = 0;

  while(true) {
    yield id++;
  }
}

export const id = idGen();

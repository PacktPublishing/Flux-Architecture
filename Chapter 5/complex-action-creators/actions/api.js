'use strict';

// API helper function - resolves the given
// "data" after the given MS "delay".
function api(data, delay=1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

// The first API...
export function first() {
  return api([ 'A', 'B', 'C' ], 500);
}

// // The second API...
export function second() {
  return api([ 1, 2, 3 ]);
}

// The third API...
export function third() {
  return api([ 'D', 'E', 'F' ], 1200);
}

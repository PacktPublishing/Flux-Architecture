'use strict';

import { Suite } from 'benchmark';

// The "setup()" function is used by each benchmark in
// the suite to create data to used within the test.
// This is run before anything is measured.
function setup() {

  // The "coll" array will be available in each
  // benchmark function because this source gets
  // compiled into the benchmark function.
  const coll = new Array(10000)
    .fill({
      first: 'First',
      last: 'Last',
      disabled: false
    });

  // Disable some of the items...
  for (let i = 0; i < coll.length; i += 10) {
    coll[i].disabled = true;
  }
}

new Suite()

  // Adds a benchmark that tests the "filter()"
  // function to remove disabled items and the
  // "map()" function to transform the string
  // properties.
  .add('filter() + map()', () => {
    const results = coll
      .filter(item => !item.disabled)
      .map(item => ({
        first: item.first.toUpperCase(),
        last: item.last.toUpperCase()
      }));
  }, { setup: setup })

  // Adds a benchmark that tests a "for..of" loop
  // to build the "results" array.
  .add('for..of', () => {
    const results = [];

    for (let item of coll) {
      if (!item.disabled) {
        results.push({
          first: item.first.toUpperCase(),
          last: item.last.toUpperCase()
        });
      }
    }
  }, { setup: setup })

  // Adds a benchmark that tests a "reduce()"
  // call to filter out disabled items
  // and perform the string transforms.
  .add('reduce()', () => {
    const results = coll
      .reduce((res, item) => !item.disabled ?
        res.concat({
          first: item.first.toUpperCase(),
          last: item.last.toUpperCase()
        }) : res);
  }, { setup: setup })

  // Setup event handlers for logging output...
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('start', () => {
    console.log('Running...');
  })
  .on('complete', function() {
    const name = this.filter('fastest').map('name');
    console.log(`Fastest is "${name}"`);
  })
  .on('error', function(e) {
    console.error(e.target.error);
  })

  // Runs the benchmarks...
  .run({ 'async': true });
  // →
  // Running...
  // filter() + map() x 1,470 ops/sec ±1.00% (86 runs sampled)
  // for..of x 1,971 ops/sec ±2.39% (81 runs sampled)
  // reduce() x 1,479 ops/sec ±0.89% (87 runs sampled)
  // Fastest is "for..of"

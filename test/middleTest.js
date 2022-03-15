const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [] for an array with one or two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
    assert.deepEqual(middle([1]), []);
  })

  it ("returns the middle element for an array with odd number of elements, except arrays with one element", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })

  it ("returns the middle 2 elements for an array with even number of elements, except arrays with two elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
  
});

// assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);

// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1])) // => []
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
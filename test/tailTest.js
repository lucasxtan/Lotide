const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'], for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});

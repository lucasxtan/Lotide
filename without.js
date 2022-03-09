const eqArrays = function(a, b) {
  if (a.length !== b.length){
    return false
  }
  for (let i = 0; i < a.length; i++){
    if (a[i] !== b[i]){
      return false
    } 
  }
  return true
}

const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${a}] !== [${b}]`);
  }
};


const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
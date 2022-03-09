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

const middle = function(a){
  let arrMid = [];
  if (a.length === 1 || a.length === 2){
    arrMid = [];
  } else if (a.length % 2 === 1){
    arrMid.push(a[Math.floor(a.length/2)]);
  } else if (a.length % 2 === 0){
    arrMid.push(a[a.length/2 - 1], a[a.length/2])
  }
  return arrMid;
}

assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);

console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1])) // => []
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
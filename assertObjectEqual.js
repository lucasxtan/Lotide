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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false
  }

  for (let i = 0; i < Object.keys(object1).length; i++){
    const key = Object.keys(object1)[i]

    if (Array.isArray(object1[key]) || Array.isArray(object2[key])){
      const equalArray = eqArrays(object1[key], object2[key]);
      console.log(equalArray);
      
      if (!equalArray){
        return false
      }

    } else if (object1[key] !== object2[key]){
      return false
    }
   
  }
  return true
};



const assertObjectsEqual = function(a, b) {
  const inspect = require('util').inspect;
  if (eqObjects(a, b)) {
    console.log(`✅✅✅Assertion Passed: [${inspect(a)}] === [${inspect(b)}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${inspect(a)}] !== [${inspect(b)}]`);
  }
};


const cd = { c: ["1", 3], d: [3, 3] };
const dc = { c: ["1", 3], d: [3, 1] };
assertObjectsEqual(cd, dc); // => true

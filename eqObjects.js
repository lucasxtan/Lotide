const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false



const cd = { c: ["1", 3], d: [3, 3] };
const dc = { c: ["1", 3], d: [2, 3] };
console.log(eqObjects(cd, dc)); // => false

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
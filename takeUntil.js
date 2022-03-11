/*
Lodash has a function called takeWhile
This function creates a slice of array with
 elements taken from the beginning. Elements 
 are taken until predicate returns falsey. 
 The predicate is invoked with
 three arguments: (value, index, array).
*/

//our function takeUntil
//will take in two parameters
//1. the array to work with
//2. the callback (which Lodash calls predicate)


// "slice of the array with elements taken
// from the beginning." It should keep going 
//until the callback/predicate returns a truthy 
//value.


const takeUntil = function (array, callback) {
  takeArray = [];


  for (item of array){
    if (!callback(item)) {
      takeArray.push(item);
    } else {
      break;
    }
  }
  return takeArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//should output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
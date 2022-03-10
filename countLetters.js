const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function (sentence) {
  let array = sentence.split(' ').join('')
  const results = {};

  for (let i = 0; i < array.length; i++) {
    if (!results[array[i]]) {
      results[array[i]] = 1;
    } else {
      results[array[i]] += 1;
    }
  }
  return results;
}



console.log(countLetters("lighthouse in the house"))
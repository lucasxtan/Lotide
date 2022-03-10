const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = 1;
    } else {
      results[sentence[i]] += 1;
    }
  }
  return results;
}



console.log(countLetters("lighthouse in the house"))
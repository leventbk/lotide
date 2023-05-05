// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
	if (actual === expected) {
	  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
	  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
  };
  /////////////////////////

const countLetters = function (string) {

	let letterCount = {};

	for (const letter of string) {
	  if (letter !== ' ') {
		letterCount[letter] = letterCount[letter] + 1 || 1;
	  }
	  // Another option for if statement ************
	//   if(result[letter] === undefined) {
	// 	result[letter] = 1;
	//   } else {
	// 	result[letter]++;
	//   }
	}
	
	return letterCount;
}

console.log(countLetters('Lighthouse in the house'));

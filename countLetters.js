// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
	if (actual === expected) {
	  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
	  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
  };
  /////////////////////////
  //https://web.compass.lighthouselabs.ca/days/w01d3/activities/287

const countLetters = function (string) {
	//edge case
	if(typeof string !== 'string') return undefined

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
module.exports = countLetters;
assertEqual(countLetters({}), undefined)
const letterPositions = function(sentence) {
	const results = {};

	for (const [index, letter] of sentence.split('').entries()) {
	  if (letter !== ' ') {
		if (results[letter]) {
		  results[letter].push(index);
		} else {
		  results[letter] = [index];
		}
	  }
	}
	return results;
}
module.exports = letterPositions;
assertArraysEqual(letterPositions("hello").e, [1]);
const eqArrays = function(arr1, arr2) {
	if (arr1.toString() === arr2.toString()) {
	  console.log(true);
	  
	} else {
	  console.log(false);
	}
  };
  
  const assertArraysEqual = function (firstArr, secondArr) {
	  eqArrays(firstArr, secondArr)
	  console.log( `${firstArr} and ${secondArr}`)
  }
  

  

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

assertArraysEqual(letterPositions("hello").e, [1]);
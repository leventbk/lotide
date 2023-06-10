const assertEqual = function(actual, expected) {
	const answer = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
	console.log(answer);
  };
  
  const eqArrays = (firstArray, secondArray) => {
	if (firstArray.length !== secondArray.length) {
	  return false;
	}
	for (let i = 0; i < firstArray.length; i++) {
	  if (firstArray[i] !== secondArray[i]) {
		return false;
	  }
	}
	return true;
  };

/////// TAKE UNTIL FUNCTION 
const takeUntil = function (arr, callback) {
	const result = [];
	for (let val of arr) {
		if(!callback(val)){ 
			result.push(val)
		} else{ break;}
	}
	return result
}
module.exports = takeUntil;
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1)
console.log('---')

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// expected output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]



//takeUntil(data1, results1);
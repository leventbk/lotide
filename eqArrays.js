//const { require } = require('./assertEqual');

  const eqArrays = function (arr1, arr2) {
	if(arr1.toString() === arr2.toString()) {
		console.log(true)
		
	}else { console.log(false)}
  }
  module.exports = eqArrays;
  
  eqArrays([1, 2, 3], [1, 2, 3]) // => true
  eqArrays([1, 2, 3], [3, 2, 1]) // => false
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
  eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
 
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
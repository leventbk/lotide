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

assertArraysEqual([1,2,3],[1,2,3,4])
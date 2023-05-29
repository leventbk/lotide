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

  // Flatten's starting from here.
  // recursion will be a good solving on nesteds
  //typeof check is also a good move
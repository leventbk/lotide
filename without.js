const eqArrays = function(arr1, arr2) {
	if (arr1.toString() === arr2.toString()) {
	return true;
	//console.log(true);
	
	} else {
	return false;
	//console.log(false);
	}
};
  
const assertArraysEqual = function (firstArr, secondArr) {
	console.log( `${firstArr} and ${secondArr}`)
	return eqArrays(firstArr, secondArr)
}

//**************************** */

const without = function (source, itemsToRemove) {
	let wanted;
	if ( assertArraysEqual(source, itemsToRemove) === true) {
		console.log(`source code's totalled removed`);
		return wanted = [];

	} else {
		//make 2 array parameter string, Then, remove the second array's value from first one.
		for ( let i = 0; i < itemsToRemove.length; i++) {
			const index = source.indexOf(itemsToRemove[i]);
			if (index !== -1) {
				source.splice(index, 1);
			}
		}
		console.log(source)
		console.log("I will be working on it")
	}

}



// test case
// without([1,2],[1,2])
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log('source first' + words)
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);
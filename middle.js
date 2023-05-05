// const assertEqual = function(actual, expected) {
// 	if (actual === expected) {
// 	  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// 	} else {
// 	  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// 	}
//   };


// const eqArrays = function(arr1, arr2) {
// 	if (arr1.toString() === arr2.toString()) {
// 	  console.log(true);
	  
// 	} else {
// 	  console.log(false);
// 	}
//   };
  
//   const assertArraysEqual = function (firstArr, secondArr) {
// 	  eqArrays(firstArr, secondArr)
// 	  console.log( `${firstArr} and ${secondArr}`)
//   }
  




// find middle of an array
// find the middle index, 
//	odd index array
//	even index

const middle = function (arr) {
	const middleIndex = Math.floor(arr.length / 2);

	if ( arr.length <= 2) {
		return;
	}
	if( arr.length % 2 === 0) {
		return [arr[middleIndex -1], arr[middleIndex]]

	} else {
		return arr[middleIndex];
	}
};

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

const person = {name: "Paul",address: {street: "310 W 95th",city: "New York",zipCode: 10027}};
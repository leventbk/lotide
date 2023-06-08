//const eqArrays = require('./eqArrays');

const middle = function (arr) {
	const middleIndex = Math.floor(arr.length / 2);

	if ( arr.length <= 2) {
		return [];
	}
	if( arr.length % 2 === 0) {
		return [arr[middleIndex -1], arr[middleIndex]]

	} else {
		return arr[middleIndex];
	}
};
module.exports = middle;
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7])) // => 4


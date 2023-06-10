
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
	  results.push(callback(item));
  }
  return results;
};
module.exports = map;
const words = ["ground", "control", "to", "major", "tom"];
  
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
  
const numbers = [1, 2, 3, 45];
const results2 = map(numbers, (number) => number % 2);
console.log(results2);
assertArraysEqual(results2, [1, 0, 1, 1]);
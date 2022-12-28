/*

You are given a positive integer num consisting of exactly four digits. 
Split num into two new integers new1 and new2 by using the digits found in num. 
Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. 
Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
Return the minimum possible sum of new1 and new2.

*/

const minimumSum = function (num) {
  const numbers = String(num).split('').map(Number);
  numbers.sort();

  let num1 = `${numbers[0]}${numbers[2]}`;
  let num2 = `${numbers[1]}${numbers[3]}`;

  return +num1 + +num2;
};

console.log(minimumSum(2932));

/*

Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

*/

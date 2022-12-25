/*

Given two non-negative integers num1 and num2 represented as strings, 
return the product of num1 and num2, also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

const multiply = function (num1, num2) {
  return String(BigInt(num1) * BigInt(num2));
};

console.log(multiply('123', '456'));

/*

Input: num1 = "123", num2 = "456"
Output: "56088"

*/

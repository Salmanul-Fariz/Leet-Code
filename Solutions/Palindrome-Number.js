/*

Given an integer x, return true if x is a palindrome,
and false otherwise.

*/

const isPalindrome = function (val) {
  let number = String(val).split('');
  let lastIndex = number.length - 1;

  for (let i = 0; i < lastIndex / 2; i++) {
    if (number[i] !== number[lastIndex - i]) return false;
  }
  return true;
};

console.log(isPalindrome(121));

/*

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

*/

/*

You are given an integer array nums.
The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.

*/

const sumOfUnique = function (nums) {
  let output = 0;
  let i = 0;

  while (i < nums.length - 1) {
    let j = i + 1;
    let count = 0;
    if (nums[i] !== -1) {
      while (j < nums.length) {
        if (nums[i] === nums[j]) {
          count++;
          nums[j] = -1;
        }
        j++;
      }
      if (count === 0) {
        output += nums[i];
      }
    }
    i++;
  }
  if (nums[nums.length - 1] !== -1) output += nums[nums.length - 1];
  return output;
};

console.log(sumOfUnique([1, 2, 3, 2]));

/*

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

*/

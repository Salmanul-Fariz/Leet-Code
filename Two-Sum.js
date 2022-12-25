/* 

Q :: Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target. 
You may assume that each input would have exactly one solution,
and you may not use the same element twice. You can return the answer in any order.

*/

const twoSum = function (nums, target) {
  let i = 0;
  let j = 0;
  let sum = 0;
  while (i < nums.length) {
    j = 0;
    while (j < nums.length) {
      if (i === j) {
        j++;
        continue;
      }
      sum = nums[i] + nums[j];
      if (sum === target) break;
      j++;
    }
    if (sum === target) break;
    i++;
  }
  return [i, j];
};

console.log(twoSum([2, 7, 11, 15], 9));

/*

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 
*/

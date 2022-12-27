/*

You are given an integer array nums. You are initially positioned at the array's first index, 
and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.

*/

// in this iam used greedy algorithm

const canJump = function (nums) {
  let target = nums.length - 1;

  for (i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= target) target = i;
  }

  return target === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));

/*

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/

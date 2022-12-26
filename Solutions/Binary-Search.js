/*

Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. If target exists, 
then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

*/

const search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let middeleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === nums[middeleIndex]) {
      return middeleIndex;
    }

    if (target > nums[middeleIndex]) {
      leftIndex = middeleIndex + 1;
    } else {
      rightIndex = middeleIndex - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

/*

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

*/

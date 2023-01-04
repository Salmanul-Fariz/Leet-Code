/*

Given an integer array nums of unique elements, 
return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

*/

const subsets = function (nums) {
  let powerSet = [[]];

  for (let val of nums) {
    const length = powerSet.length;

    for (let i = 0; i < length; i++) {
      let temp = powerSet[i].slice();
      temp.push(val);

      powerSet.push(temp);
    }
  }

  return powerSet;
};

console.log(subsets([1, 2, 3]));

/*

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

*/

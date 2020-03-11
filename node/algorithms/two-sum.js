// https://leetcode.com/problems/two-sum
/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const lookup = {}, res = [];

  for (const i in nums) {
    const curr = lookup[nums[i]];
    if (curr) {
      return [curr, i];
    } else {
      lookup[target - nums[i]] = i;
    }
  }

  return [0,0];
}
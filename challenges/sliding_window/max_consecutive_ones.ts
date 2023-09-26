// Leet Code: 485. Max Consecutive Ones https://leetcode.com/problems/max-consecutive-ones/ Easy
// Given a binary array nums, return the maximum number of consecutive 1's in the array.


// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2


// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

function findMaxConsecutiveOnes(nums: number[]): number {
  let streak: number = 0
  let maxStreak: number = 0
  if (nums.length === 0) {
    return 0
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      streak = 0
    } else {
      streak += 1
    }
    maxStreak = Math.max(maxStreak, streak)
  }
  return maxStreak
};
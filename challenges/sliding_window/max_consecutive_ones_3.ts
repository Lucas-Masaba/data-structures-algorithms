// Leet Code 1004. Max Consecutive Ones III https://leetcode.com/problems/max-consecutive-ones-iii/ Medium

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length


function longestOnes(nums: number[], k: number): number {
  let maxStreak = 0;

  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      k--;
    }
    while (k < 0) {
      if (nums[l] === 0) {
        k++;
      }
      l++;
    }
    maxStreak = Math.max(maxStreak, i - l + 1);
  }

  return maxStreak;
};
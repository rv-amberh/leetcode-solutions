/**
 * @param {number[]} nums
 * @return {number[]}
 */

 //calculate the values left of all nums, and right of all nums using forward and reverse tranversal, then multiple each position by everything to the keft and righ


const productExceptSelf = function(nums) {
  let left = new Array(nums.length); 
  let right = new Array(nums.length); 
  let ans = [];

  left[0] = 1;
  for(let l = 1; l < nums.length; l++) {
      left[l] = left[l - 1] * nums[l - 1]
  }

  right[right.length - 1] = 1
  for(let r = nums.length - 2; r >= 0; r--) {
      right[r] = right[r + 1] * nums[r + 1]
  }
  ans = right.map((r, i) => r * left[i])
  return ans
};
//left = [1, 1, 2, 6]

//right = [, 1]
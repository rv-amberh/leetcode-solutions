/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0;
    for (let i = 0; i <= farthest && i < nums.length; i++) {
        farthest = Math.max(farthest, i + nums[i]);
    }
    return farthest >= nums.length - 1;
};
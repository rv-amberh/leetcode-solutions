/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 //find the middle point and if our num is smaller than target we can start our search between there and the end of our array or the other way

var search = function(nums, target) {
    let midway = Math.round(nums.length/2)
    
    if(nums[midway] === target) return midway;

    if(nums[midway] < target) {
        let lp = midway;
        let rp = nums.length - 1;
        while(lp <= rp) {
            if(nums[lp] == target) return lp;
            else if(nums[rp] == target) return rp;
            else {
                lp++;
                rp--;
            }
        }
    } else {
        let lp = 0;
        let rp = midway
        while(lp <= rp) {
            if(nums[lp] == target) return lp;
            else if(nums[rp] == target) return rp;
            else {
                lp++;
                rp--;
            }
        }
    }
    return -1
};
/**
 * @param {number[]} height
 * @return {number}
 */
 //set our pointers
 //keep track of the max area which is found by doing l * h (length being rp - lp and height being the smallest val between nums[lp] and nums[rp])
 //we will return the max area using math.max to update our return value
const maxArea = (nums) => {
   let maxArea = 0
   let lp = 0
   let rp = nums.length - 1

   while(lp < rp) {
       let calculation = nums[lp] > nums[rp] ? nums[rp] * (rp - lp) : nums[lp] * (rp - lp)
       maxArea = Math.max(maxArea, calculation)
       if (nums[lp] > nums[rp]) {
           rp--
       } else lp++
   }
   return maxArea
};
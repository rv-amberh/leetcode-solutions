/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//prefix sum approach 

// const getAverage = (nums) => {
//     let sum = nums.reduce((acc, curr) => acc + curr)
//     let average = sum/nums.length
//     return average
// }

// var findMaxAverage = function(nums, k) {
//     let startingAv = Number.MIN_SAFE_INTEGER;
//     let lp = 0;
//     let rp = k;
    
//    if(nums.length == 1) return nums[0] / 1;
    
//    while (lp < rp && rp < nums.length + 1) {
//        let sliceArr = nums.slice(lp, rp)
//        let temp =  sliceArr.reduce((acc, curr) => acc + curr)
//        let average = temp/sliceArr.length
       
//        if(average > startingAv) startingAv = average;
//        lp++;
//        rp++;
//    }
//     return startingAv;
// };

//loop through and sum the numbers then place that sum in the i index of new list
//

const findMaxAverage = (nums, k) => {
    let newList = [nums[0]]
    let ans = Number.MIN_SAFE_INTEGER

    if (nums.length <= 1) return nums[0]/1;
    if(nums.length < 1) return 0;

    for(let i = 1; i < nums.length; i++) {
       let sum = newList[i - 1]+ nums[i]
        newList.push(sum)
    }

     if(k > nums.length) {
        return newList[newList.length - 1]/k;
    }

    let lp = 0;
    let rp = k - 1;

    while(rp < nums.length) {
       let temp = lp == 0 ? newList[rp] : newList[rp] - newList[lp - 1];
       ans = Math.max(temp/k, ans)
       lp++;
       rp++;
    }
    return ans;
}
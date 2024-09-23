/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let ans = [];
    if (arr.length === 1) return [-1];

    for(let i = 0; i < arr.length; i++) {
        let greatestNum = 0
        for (let j = i + 1; j < arr.length; j++) {
             greatestNum = Math.max(greatestNum, arr[j])
        }
       ans.push(greatestNum)
    }
    ans[ans.length - 1] = -1;
    return ans;
};
/**
 * @param {number[]} temps
 * @return {number[]}
 */
 //loop through the temp array
 
var dailyTemperatures = function(temps) {
    const n = temps.length;
    const ans = new Array(n).fill(0);
    console.log(ans);

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(temps[j] > temps[i]) {
                ans[i] = j - i;
                break;
            } 
        }
    }
    return ans;
};
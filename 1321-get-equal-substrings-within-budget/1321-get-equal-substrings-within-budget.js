/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = (s, t, maxCost) => {
    let ans = 0;
    let costC = [];
    
    for(let i = 0; i < s.length; i++) {
        let cost = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
        costC.push(cost);
    }

       let left = 0;
        let curr = 0;

    for(let j = 0; j < costC.length; j++) {

        curr += costC[j];
        console.log(curr, "curr")

        while(curr > maxCost && left <= j) {
            curr -= costC[left];
            left+=1;
        }
        ans = Math.max(ans, j - left + 1);
    }

    return ans;
};

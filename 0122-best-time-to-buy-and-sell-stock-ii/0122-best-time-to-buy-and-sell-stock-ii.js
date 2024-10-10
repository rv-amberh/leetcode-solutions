/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let profit = 0;
let ans = 0;
let lp = 0;
let rp = 1;

while(lp < rp && rp < prices.length) {
    if(prices[lp] <= prices[rp]) {
        if(prices[rp] - prices[lp] > profit) {
             ans+= prices[rp] - prices[lp];
             profit = 0;
            lp = rp;
            rp++;
        } else {
            console.log('profit', profit, prices[lp], prices[rp])
            rp++;
        }
    } else if (prices[lp] > prices[rp]) {
        ans += profit;
        lp = rp;
        rp++;
    }
  }
  return ans;
};
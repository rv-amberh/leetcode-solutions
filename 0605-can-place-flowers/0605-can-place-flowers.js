/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 //loop through arr
 //starting at i = 0 , if we find a 1 then we know that we need a zero in between our next plot or we can skip the subsequent 1 
 //if we have a zero and the next number is a zero, we can plant so counter++
 //we can update our i to the curr position
 //if our curr 1 is a 1 again then we can check for i + 1 being a zero and if so we make i + 2 a new potential plant, counter++ and let i = new curr position
var canPlaceFlowers = function(flowerbed, n) {
    let counter = 0;

 for (let i = 0; i < flowerbed.length; i++) {
   if(flowerbed[i] === 0) {
    if((i === 0 || flowerbed[i - 1] === 0) && (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)) {
             flowerbed[i] = 1;
             counter++;
     } 
   }
 }
   return counter >= n;
};
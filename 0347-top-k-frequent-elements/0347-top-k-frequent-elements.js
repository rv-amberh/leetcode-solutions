/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
**/
//create Map of num and count
//sort the object.entries, based on the count and then return an ans variable of the 0 index from 0 - k

const topKFrequent = (nums, k) => {
    const holder = {}
    for(let num of nums) {
        holder[num] ? holder[num]++ : holder[num] = 1;
    }
    
    let sortedArr = Object.entries(holder).sort(([ak, av], [bk, bv]) =>  bv - av)
    let mappedAns = sortedArr.splice(0, k).map(a => Number(a[0]))
    return mappedAns
};
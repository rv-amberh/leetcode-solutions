/**
 * @param {string[]} strs
 * @return {string[][]}
*/

//create hasmap of sorted value and any that matches that one and return the keys
const groupAnagrams = (strs) => {
    let holder = {}

    for(let str of strs) {
        let sorted = str.split("").sort().join("")
        holder[sorted] ? holder[sorted].push(str) : holder[sorted] = [str]
    }
    return Object.values(holder)
};
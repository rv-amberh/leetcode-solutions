/**
 * @param {string} s
 * @return {number}
 */
 //split array, while our val not === "" then return the length of last array from the back

var lengthOfLastWord = function(s) {
    const splitArr = s.split(" ");
    let ans;
    while(splitArr[splitArr.length - 1] === "") {
        splitArr.pop();
    }
    return splitArr[splitArr.length - 1].length
};
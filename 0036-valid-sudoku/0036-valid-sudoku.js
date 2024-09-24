/**
 * @param {character[][]} boards
 * @return {boolean}
 */
var isValidSudoku = function(boards) {
for(let r = 0; r < 9; r++) {
    let row = new Set();
    let col = new Set();
    let box = new Set();
    for(let c = 0; c < 9; c++) {
        let spotR = boards[r][c];
        let spotC = boards[c][r];
        let boxSpot = boards[3 * Math.floor(r/3) + Math.floor(c/3)][3 * (r % 3)+(c % 3)];

        console.log(spotC, spotR, boxSpot);

      if(spotR !== ".") {
        if(row.has(spotR)) return false;
         else row.add(spotR);
    }
      if(spotC !== ".") {
        if(col.has(spotC)) return false;
         else col.add(spotC);
     }

     if(boxSpot!== ".") {
        if(box.has(boxSpot)) return false;
         else box.add(boxSpot);
     }
   }
  } 
  return true;
};

//every row meaning every array has to have unique characters
//each index must have unique characters for that  index
//
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
const findSecretWord = (words, master) => {
    let guess = words[randomizer(words.length)];
    let matches = master.guess(guess);
    
    while(matches!== 6) {
        for (let i = 0; i <= words.length - 1; i++) {
            if (matchChecker(words[i], guess) !== matches) {
                words.splice(i, 1)
            }
      } guess = words[randomizer(words.length)];
        matches = master.guess(guess);
    }
  };

  const randomizer = (arrL) => {
      return Math.floor(Math.random() * arrL);
  }

const matchChecker = (word, guess) => {
        let matches = 0;
        for(let i = 0; i < 6; i++) {
            word[i] === guess[i] ? matches++ : -1;
    }
    return matches;
  }

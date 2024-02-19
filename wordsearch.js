const transpose = require('./transpose');

const wordSearch = (letters, word) => {

  // check valid, non-empty matrix
  // check that it has rows
  if (!Array.isArray(letters) || letters.length === 0) return false;
  // check that first row is Array
  if (!Array.isArray(letters[0])) return false;
  // check that the first row has cols
  const numCols = letters[0].length;
  if (numCols === 0) return false;





  //checking to see if each row is an array and has the same amount of chars
  for (const row of letters) {
    if (!Array.isArray(row) || row.length !== numCols) return false;
    for (const ele of row) {
      if (typeof ele !== "string" || ele.length > 1) return false;
    }
  }



  // look for the word backwards
  const reversedWord = word.split('').reverse().join('');

  //   let testString = '';
  //   for (let i = 0; i < letters.length; i++) {
  //     if (letters[i].length > i) break;
  //     testString += letters[i][i];
  //   }
  //   if (testString.includes(word) || testString.includes(reversedWord)) return true;

  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(reversedWord)) return true;
  }

  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(reversedWord)) return true;
  }

  return false;
};

module.exports = wordSearch;


// wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'FRANK');

const transpose = require('./transpose');


/**
 * Searches for a word in a matrix of letters
 * @param {string[][]} letters - a matrix of single characters
 * @param {string} word - a string to search for
 * @returns {boolean} - true if the word is found, false otherwise
 */
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

  // map sub arrays to strins
  const horizontalJoin = letters.map(ls => ls.join(''));

  // check for the word in the horizontalJoin
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(reversedWord)) return true;
  }

  // switch the rows and columns
  const transposedLetters = transpose(letters);

  // map sub arrays to strings
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  // check for the word in the verticalJoin
  for (const l of verticalJoin) {
    if (l.includes(word) || l.includes(reversedWord)) return true;
  }



  // check for the word in the diagonals (from top left to bottom right)
  if (findInDiagonals(letters, word, reversedWord)) return true;

  // check for the word in the diagonals (from top right to bottom left)
  const reversedRows = letters.map(ls => ls.reverse());
  if (findInDiagonals(reversedRows, word, reversedWord)) return true;

  // word not found
  return false;
};


/**
 * Searches for a word in the diagonals of a matrix of letters - no error chexking, internal f(x)
 * @param {any} letters
 * @param {any} word
 * @param {any} reversedWord
 * @returns {any}
 */
const findInDiagonals = (letters, word, reversedWord) => {
// starting from the first row, going down
  for (let i = 0; i < letters.length; i++) {
  // get diagonal starting with i
    let diagonal = '';
    for (let j = 0; j < letters[i].length; j++) {
      if (letters[i + j] && letters[i + j][j]) {
        diagonal += letters[i + j][j];
      }
    }
    if (diagonal.includes(word) || diagonal.includes(reversedWord)) return true;
  }


  // starting from the first column and going accross
  for (let i = 1; i < letters[0].length; i++) {
  // get diagonal starting with i
    let diagonal = '';
    for (let j = 0; j < letters.length; j++) {
      if (letters[j] && letters[j][i + j]) {
        diagonal += letters[j][i + j];
      }
    }
    if (diagonal.includes(word) || diagonal.includes(reversedWord)) return true;
  }
};


module.exports = wordSearch;

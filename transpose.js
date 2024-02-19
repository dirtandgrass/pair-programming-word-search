
const transpose = function(matrix) {
  if (!Array.isArray(matrix)) throw new Error("Not a valid matrix"); // checks to ensure matrix is an array

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  matrix.forEach(row => {
    if (row.length !== numCols) throw new Error("Invalid matrix, each row should have the same # of columns");
  }); // checks for valid matrix where each row has the same number of columns as the first row

  const transposedMatrix = [];

  for (let i = 0; i < numCols; i++) {
    transposedMatrix.push([]); // create a new array for the new row
    for (let j = 0; j < numRows; j++) {
      transposedMatrix[i].push(matrix[j][i]); // swaps position of element from old matrix and pushes to new matrix
    }
  }

  return transposedMatrix;

};

module.exports = transpose;
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];
  const expected = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */
 function diagonalDifference(sqrMatrix) {
      let leftToRightSum = 0
      let rightToLeftSum = 0
      let arrayLength = squareMatrix.length
      for (let i = 0; i < arrayLength; i++) {
        leftToRightSum+=squareMatrix[i][i]
        rightToLeftSum+=squareMatrix[i][arrayLength-i-1]
    }
    return Math.abs(leftToRightSum - rightToLeftSum)
}

console.log(diagonalDifference(squareMatrix))

  /**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */

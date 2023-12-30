// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// assuming that the matrix is NxN
function rotateMatrix(matrix) {
  const N = matrix.length

  for (let i = 0; i < parseInt(N / 2); i++) {
    for (let j = i; j < N - i - 1; j++) {
      // It's possible to use one temVariable
      // But to understand better It's used four temp variables
      let leftmostTop = matrix[i][j]
      let rightmostTop = matrix[j][N - i - 1]
      let rightmostBottom = matrix[N - i - 1][N - j - 1]
      let leftmostBottom = matrix[N - j - 1][i]

      matrix[i][j] = leftmostBottom
      matrix[j][N - i - 1] = leftmostTop
      matrix[N - i - 1][N - j - 1] = rightmostTop
      matrix[N - j - 1][i] = rightmostBottom
    }
  }
}

// const m1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
const m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

rotateMatrix(m2)
console.table(m2)

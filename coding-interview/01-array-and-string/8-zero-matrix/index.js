// Zero Matrix. Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

function zeroMatrix(m) {
  const M = m.length
  const N = m[0].length
  const positions = []

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (m[i][j] === 0) {
        positions.push({ i: i, j: j })
      }
    }
  }

  for (const item of positions) {
    for (let i = 0; i < M; i++) {
      m[item.i][i] = 0
      m[i][item.j] = 0
    }
  }
}

const m0 = [
  [1, 2, 3, 4],
  [5, 6, 5, 8],
  [1, 4, 0, 10],
  [20, 30, 40, 60],
  [70, 80, 90, 100],
]
zeroMatrix(m0)
console.table(m0)

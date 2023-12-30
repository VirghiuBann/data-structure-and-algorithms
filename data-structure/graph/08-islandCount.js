// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
// r = # rows
// c = # cols
// Time O(rc)
// Space O(rc)
//          (r-1,c)
//            |
//(r,c-1) <-(r,c) ->(r,c+1)
//           |
//         (r+1,c)

const islandCount = (grid) => {
  const visited = new Set()
  let count = 0

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count += 1
      }
    }
  }
  return count
}

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length

  if (!rowInbounds || !colInbounds) return false

  if (grid[r][c] === 'W') return false

  const pos = r + ',' + c
  if (visited.has(pos)) return false
  visited.add(pos)

  explore(grid, r - 1, c, visited)
  explore(grid, r + 1, c, visited)
  explore(grid, r, c - 1, visited)
  explore(grid, r, c + 1, visited)

  return true
}

const grid1 = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

const grid2 = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
]

console.log(islandCount(grid1)) // -> 3
console.log(islandCount(grid2)) // -> 4

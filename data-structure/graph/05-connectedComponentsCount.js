//  Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

const connectedComponentCount = (graph) => {
  const visited = new Set()
  let count = 0

  for (const node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1
    }
  }
  return count
}

const explore = (graph, current, visited) => {
  if (visited.has(current + '')) return

  visited.add(current + '')

  for (const neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }
  return true
}

// 1 - 2
//
//     4
//     |
// 5 - 6 - 8
//     |
// 3   7

//  result 3

// n = # nodes
// e = # edges
// Time: O(e)
// Space: O(n)

const graph1 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
} // 2

const graph2 = {
  1: [2],
  2: [1, 8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2],
} // 1

const graph3 = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
} // 3

const graph4 = {}
const graph5 = {
  0: [4, 7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: [],
} // 5

console.log(connectedComponentCount(graph1))
console.log(connectedComponentCount(graph2))
console.log(connectedComponentCount(graph3))
console.log(connectedComponentCount(graph4))
console.log(connectedComponentCount(graph5))

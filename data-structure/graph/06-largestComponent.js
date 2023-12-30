// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
  const visited = new Set()
  let largest = 0

  for (const node in graph) {
    const size = exploreSize(graph, node, visited)

    if (size > largest) largest = size
  }
  return largest
}

const exploreSize = (graph, current, visited) => {
  if (visited.has(current)) return 0

  visited.add(current)

  let size = 1

  for (const neighbor of graph[current]) {
    size += exploreSize(graph, neighbor, visited)
  }

  return size
}

const graph1 = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2'],
} // 4

//      5
//     |  \
// 1 - 0 - 8
//
//   4 - 2
//   \  /
//    3

// n # nodes
// e = # edges
// Time O(e)
// Space O(n)

const graph2 = {
  1: ['2'],
  2: ['1', '8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2'],
} // 6

console.log(largestComponent(graph1))
console.log(largestComponent(graph2))

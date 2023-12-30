const { buildGraph } = require('./helpers/buildGraph')
// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const hash = new Set()
  return hasPath(graph, nodeA, nodeB, hash)
}

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true
  if (visited.has(src)) return

  visited.add(src)

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true
    }
  }
  return false
}

//  i - j
//  |
//  k - l
//  |
//  m
//
//  o - n

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]
// converting to json
// const graph = {
//   i: ['j', 'k'],
//   j: ['i'],
//   k: ['i', 'm', 'l'],
//   m: ['k'],
//   l: ['k'],
//   o: ['n'],
//   n: ['o'],
// }

// console.log('graph', buildGraph(edges))
console.log(undirectedPath(edges, 'j', 'm')) // true

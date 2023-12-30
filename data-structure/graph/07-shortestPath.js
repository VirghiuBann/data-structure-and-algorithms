const { buildGraph } = require('./helpers/buildGraph')
// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)

  const visited = new Set(nodeA)

  const queue = [[nodeA, 0]]

  while (queue.length > 0) {
    let [node, distance] = queue.shift()

    if (node === nodeB) return distance

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance + 1])
      }
    }
  }

  return -1
}

//     x - y
//   /      \
// w          z
//  \        /
//      v

const edges1 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
] // 2

const edges2 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
] // 1

console.log(shortestPath(edges1, 'w', 'z'))
console.log(shortestPath(edges2, 'y', 'x'))

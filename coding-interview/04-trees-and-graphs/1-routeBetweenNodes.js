// Route between nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

const routeBetweenNodes = (graph, src, dst) => {
  if (graph === null) return false
  const queue = [src]
  const visited = new Set()

  while (queue.length > 0) {
    const current = queue.shift()

    if (current === dst) return true

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push(neighbor)
      }
    }
  }
  return false
}

const graph = {
  a: ['b', 'c'],
  b: ['a', 'c'],
  c: ['a', 'b'],
  d: ['e'],
  e: ['d'],
}

console.log(routeBetweenNodes(graph, 'a', 'c'))
console.log(routeBetweenNodes(graph, 'a', 'e'))
console.log(routeBetweenNodes(graph, 'b', 'd'))

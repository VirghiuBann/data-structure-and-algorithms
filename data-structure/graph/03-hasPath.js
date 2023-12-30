// has path
// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not exist a directed path between the source and destination node.

const hasPath = (graph, src, dst) => {
  if (src === dst) return true
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true
    }
  }

  return false
}

// using breadth first

const hasPathBF = (graph, src, dst) => {
  const startTime = performance.now()
  const queue = [src]

  while (queue.length > 0) {
    const current = queue.shift()

    if (current === dst) {
      const endTime = performance.now()
      console.log(`Time ... ${(endTime - startTime).toFixed(3)} ms `)
      return true
    }

    for (const neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }

  const endTime = performance.now()
  console.log(`Time ... ${(endTime - startTime).toFixed(3)} ms `)
  return false
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

console.log(hasPath(graph, 'f', 'k'))
console.log(hasPathBF(graph, 'f', 'k'))

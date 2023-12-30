// depth first
// using stack

function depthGraphPrint(graph, source) {
  const stack = [source]

  while (stack.length > 0) {
    const current = stack.pop()
    console.log(current)

    for (const neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

// using recursion
function depthGraphPrintRecur(graph, source) {
  console.log(source)
  for (const neighbor of graph[source]) {
    depthGraphPrintRecur(graph, neighbor)
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

depthGraphPrint(graph, 'a')
console.log('recursion')
depthGraphPrintRecur(graph, 'a')

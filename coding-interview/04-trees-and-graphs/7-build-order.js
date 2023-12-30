// Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). All of a project's dependencies must be built before the projects is. Find a build order that will allow the projects to be built. If there is no valid build order, return error.
// input:
//  projects: a,b,c,d,e,f
// dependencies: (a,d), (f,b), (b,d), (f,a), (d,c)
// output: f,e,a,b,d,c
const buildOrder = (projects, dependencies) => {
  const graph = {}
  const inDegree = {}
  const output = []

  for (const project of projects) {
    graph[project] = []
    inDegree[project] = 0
  }
  for (const edge of dependencies) {
    const [a, b] = edge
    graph[a].push(b)
    inDegree[b]++
  }

  let queue = projects.filter((project) => inDegree[project] === 0)

  while (queue.length > 0) {
    const currentProject = queue.shift()
    output.push(currentProject)
    for (const dependent of graph[currentProject]) {
      inDegree[dependent]--
      if (inDegree[dependent] === 0) queue.push(dependent)
    }
  }

  // console.log(queue)
  // console.log(graph)
  // console.log(inDegree)
  // console.log(output)
  if (output.length === projects.length) return output

  throw Error
}

const projects = ['a', 'b', 'c', 'd', 'e', 'f']
const dependencies = [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c'],
]

const result = buildOrder(projects, dependencies)
console.log(result)

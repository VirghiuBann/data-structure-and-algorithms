// BST sequences: A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

// const allBSTSequences = (bst) => {
//   const sequences = []
//   const recurse = (nodes, traveled) => {
//     let noChild = true
//     nodes.forEach((node) => {
//       if (node.left !== null && traveled[node.left.data] === undefined) {
//         noChild = false
//         traveled[node.left.data] = true
//         recurse(nodes.concat([node.left]), traveled)
//         delete traveled[node.left.data]
//       }
//       if (node.right !== null && traveled[node.right.data] === undefined) {
//         noChild = false
//         traveled[node.right.data] = true
//         recurse(nodes.concat([node.right]), traveled)
//         delete traveled[node.right.data]
//       }
//     })
//     if (noChild) {
//       sequences.push(nodes.map((node) => node.data))
//     }
//   }
//   const startTraveled = {}
//   startTraveled[bst.value] = true
//   recurse([bst], startTraveled)
//   return sequences
// }

function allBSTSequences(root) {
  if (root === null) return [[]]
  const result = []

  const leftSequences = allBSTSequences(root.left)
  const rightSequences = allBSTSequences(root.right)
  console.log('left', leftSequences)
  console.log('right', rightSequences)

  for (const left of leftSequences) {
    for (const right of rightSequences) {
      weaveLists(left, right, [root.data], result)
    }
  }

  return result
}

function weaveLists(first, second, prefix, result) {
  console.log(first, second, prefix, result, 'weaving')
  if (first.length === 0 || second.length === 0) {
    result.push([...prefix, ...first, ...second])

    return
  }

  weaveLists(first.slice(1), second, [...prefix, first[0]], result)
  weaveLists(first, second.slice(1), [...prefix, second[0]], result)
}

const root = new Node(2)
root.left = new Node(1)
root.right = new Node(3)

const result = allBSTSequences(root)
console.log(result)

console.log('test 2')
const tree = new Node(50)
const subTreeLeft = new Node(20)
const subTreeRight = new Node(60)

const lastSubTreeLeft = new Node(10)
const lastSubTreeRight = new Node(70)

tree.left = subTreeLeft
tree.right = subTreeRight
subTreeLeft.left = lastSubTreeLeft
subTreeLeft.right = new Node(25)
subTreeLeft.right = lastSubTreeRight

// lastSubTreeLeft.left = new Node(5)
// lastSubTreeLeft.right = new Node(15)

// lastSubTreeRight.left = new Node(65)
// lastSubTreeRight.right = new Node(80)

// const result2 = allBSTSequences(tree)
// console.log(result2)

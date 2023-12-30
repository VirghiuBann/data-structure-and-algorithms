const { depthFirstSearch, breadthFirstSearch } = require('./helpers/traversal')
// Minimal Tree: Given a sorted (increasing  order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const minimalBST = (arr) => {
  if (arr.length === 0 || arr === null) return null

  const root = createMinimalBST(arr, 0, arr.length - 1)

  return root
}

const createMinimalBST = (arr, start, end) => {
  if (start > end) return null

  const midIndex = Math.floor((start + end) / 2)
  const node = new Node(arr[midIndex])

  node.left = createMinimalBST(arr, start, midIndex - 1)
  node.right = createMinimalBST(arr, midIndex + 1, end)

  return node
}

console.log('test 1')
const test1 = [1, 2, 3, 4, 5, 6, 7, 8]
const result1 = minimalBST(test1)
console.log(...depthFirstSearch(result1))
console.log('====')
const result2 = minimalBST(test1)
console.log(...breadthFirstSearch(result2))

console.log('test 2')
const test2 = [1, 2, 3, 4, 5, 6, 7]
const result3 = minimalBST(test2)
console.log(...depthFirstSearch(result3))
console.log('====')
const result4 = minimalBST(test2)
console.log(...breadthFirstSearch(result4))

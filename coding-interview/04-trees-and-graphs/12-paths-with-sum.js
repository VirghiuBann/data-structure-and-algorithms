// Paths with sum: You are given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const countPathsWithSum = (root, targetSum) => {
  if (root === null) return 0

  let paths = new Set()

  return nPaths(root, targetSum, paths, (sum = 0))
}

const nPaths = (root, targetSum, paths, sum) => {
  let count = 0

  if (sum + root.data == paths) count++
}

// For example, given the following tree:
//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1
// For sum = 8, there are 3 paths: 5 -> 3, 5 -> 2 -> 1, -3 -> 11.
const root = new Node(10)
const a = new Node(5)
const b = new Node(-3)
const c = new Node(3)
const d = new Node(1)
const l1 = new Node(10)
const l2 = new Node(10)
const l3 = new Node(10)
const l4 = new Node(11)

root.left = a
root.right = b
a.left = c
a.right = d
c.left = l1
c.right = l2
d.right = l3
b.right = l4

console.log(countPathsWithSum(root, 8))
console.log(countPathsWithSum(root, 7))
console.log(countPathsWithSum(root, 11))

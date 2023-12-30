const { Node } = require('./basics/treeNode')

const maxPathSum = (root) => {
  if (root === null) return -Infinity

  if (root.left === null && root.right === null) return root.data
  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.right)
  )
  return root.data + maxChildPathSum
}

// find min value
//      5
//     /  \
//   11    3
//  /  \    \
// 4   15    12

// Result 3
// Time O(n)
// Space O(n)

const a = new Node(5)
const b = new Node(11)
const c = new Node(3)
const d = new Node(4)
const e = new Node(15)
const f = new Node(12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(maxPathSum(a))

const { Node } = require('./basics/treeNode')

const treeSum = (root) => {
  if (!root) return 0

  const queue = [root]
  let sum = 0

  while (queue.length > 0) {
    const current = queue.shift()

    sum += current.data

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return sum
}

const treeSumRecursive = (root) => {
  if (!root) return 0
  return root.data + treeSumRecursive(root.left) + treeSumRecursive(root.right)
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(-2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeSum(a))
console.log(treeSumRecursive(a))

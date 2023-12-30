// Check balanced: Implement a function to check if a binary tree is balanced. For the purpose of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const isBalanced = (root) => {
  if (root == null) return true

  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false
  } else {
    return isBalanced(root.left) && isBalanced(root.right)
  }
}

const getHeight = (root) => {
  if (root == null) return -1

  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  return Math.max(leftHeight, rightHeight) + 1
}

const getHeightLoop = (root) => {
  if (root == null) return 0

  const queue = [root]
  let height = -1
  while (queue.length > 0) {
    let size = queue.length
    while (size--) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    height++
  }
  return height
}

const a = new TreeNode('A')
const b = new TreeNode('B')
const c = new TreeNode('C')
const d = new TreeNode('D')
const e = new TreeNode('E')
const f = new TreeNode('F')
const g = new TreeNode('G')
a.left = b
b.left = d

a.right = c
c.left = e
c.right = f

e.left = g

console.log(getHeight(a))
console.log(getHeightLoop(a))
console.log(isBalanced(a))

// unbalanced binary tree
console.log('unbalanced binary tree')
const a1 = new TreeNode('A')
const a2 = new TreeNode('B')
const a3 = new TreeNode('C')
const a4 = new TreeNode('D')

a1.right = a2
a2.right = a3
a3.right = a4
console.log(getHeight(a1))
console.log(getHeightLoop(a1))
console.log(isBalanced(a1))

const { Node } = require('./basics/treeNode')

const treeIncludes = (root, target) => {
  if (!root) return false

  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()

    if (current.data === target) return true

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return false
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeIncludes(a, 'e'))

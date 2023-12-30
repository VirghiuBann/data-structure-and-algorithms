class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const breadthFirst = (root) => {
  if (root === null) return []
  const queue = [root]
  let result = []

  while (queue.length > 0) {
    const current = queue.shift()
    result.push(current.data)
    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }

  return result
}
// Depth first
//      a
//     /  \
//    b    c
//  /  \    \
// d    e     f

// Result a,b,c,d,e,f
// Time O(n)
// Space O(n)

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

console.log(breadthFirst(a))

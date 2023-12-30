class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const depthFirst = (root) => {
  if (root === null) return []
  const stack = [root]
  let result = []

  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current.data)
    if (current.right !== null) stack.push(current.right)
    if (current.left !== null) stack.push(current.left)
  }

  return result
}
// Depth first
//      a
//     /  \
//    b    c
//  /  \    \
// d    e     f

// Result a,b,d,e,c,f
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

console.log(depthFirst(a))

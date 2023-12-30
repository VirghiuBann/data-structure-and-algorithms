// Check Subtree: T1 and T2 are two large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.
// A tree T2 is a subtree of T1 if there exists a node n in T1 that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const checkSubtree = (t1, t2) => {
  if (t1 === null && t2 === null) return true

  if (t1 === null || t2 === null) return false

  const queue = [t1]
  while (queue.length > 0) {
    const current = queue.shift()
    if (current === t2) {
      return true
    }
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return false
}

// Input:

//       SubTree T2
//           10
//         /    \
//       4       6
//        \
//         30

//         Tree T1
//               26
//             /   \
//           10     3
//         /    \     \
//       4       6      3
//        \
//         30
const root = new Node(26)
const a = new Node(10)
const b = new Node(3)
const c = new Node(4)
const d = new Node(6)
const e = new Node(3)
const f = new Node(30)
root.left = a
root.right = b
a.left = c
a.right = d
c.left = f
b.right = e

console.log(checkSubtree(root, a))
console.log(checkSubtree(root, null))

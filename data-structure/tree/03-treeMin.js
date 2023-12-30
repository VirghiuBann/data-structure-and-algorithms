const { Node } = require('./basics/treeNode')

const minValue = (root) => {
  if (root === null) return null

  const queue = [root]
  let min = root.data

  while (queue.length > 0) {
    const current = queue.shift()

    if (min > current.data) {
      min = current.data
    }

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return min
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

console.log(minValue(a))

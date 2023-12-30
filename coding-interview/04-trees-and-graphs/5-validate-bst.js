// Validate BST: Implement a function to check if a binary tree is a binary search tree.
//   20
//  /  \
// 10   30
//  \
//   25

//        20
//       /  \
//     10   30
//    /  \
//   5    15
//  / \     \
// 3   7     17
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const validateBST = (root) => {
  if (root == null) return true

  const stack = []
  let current = root
  let prev = null

  while (current != null || stack.length > 0) {
    if (current != null) {
      stack.push(current)
      current = current.left
    } else {
      current = stack.pop()
      if (prev != null && current.data <= prev.data) return false

      prev = current
      current = current.right
    }
  }
  return true
}

const a = new Node(20)
const b = new Node(10)
const c = new Node(30)
const d = new Node(5)
const e = new Node(15)
const f = new Node(3)
const g = new Node(7)
const h = new Node(17)
a.left = b
a.right = c
b.left = d
b.right = e
e.right = h
d.left = f
d.right = g
console.log(validateBST(a))

const unBalanced = new Node(20)
unBalanced.left = new Node(10)
unBalanced.right = new Node(30)
unBalanced.left.right = new Node(25)
console.log(validateBST(unBalanced))

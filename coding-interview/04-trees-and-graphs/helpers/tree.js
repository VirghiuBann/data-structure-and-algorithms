// Tree traversal techniques

// InOrder Traversal : 4,2,5,1,6,3,7
// PreOrder Traversal: 1,2,4,5,3,6,7
// PostOrder Traversal: 4,5,2,6,7,3,1
//        (1)
//       /   \
//     (2)    (3)
//    / \     /  \
// (4)  (5) (6)  (7)

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function printInorder(node) {
  if (node === null) return

  printInorder(node.left)
  console.log(node.data + '')
  printInorder(node.right)
}

function printPreorder(node) {
  if (node == null) return

  console.log(node.data + '')
  printPreorder(node.left)
  printPreorder(node.right)
}

function printPostorder(node) {
  if (node == null) return

  printPostorder(node.left)
  printPostorder(node.right)
  console.log(node.data + '')
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log('InOrder')
printInorder(root)
console.log('PreOrder')
printPreorder(root)
console.log('PostOrder')
printPostorder(root)

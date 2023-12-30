// First common ancestor: Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. Note: this is not necessarily a binary search tree.

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const firstCommonAncestor = (root, node1, node2) => {
  if (!isNodeInTree(root, node1) || !isNodeInTree(root, node2)) return null

  return commonAncestor(root, node1, node2)
}

const commonAncestor = (root, node1, node2) => {
  if (root == null || root === node1 || root === node2) return root

  const node1IsOnLeft = isNodeInTree(root.left, node1)
  const node2IsOnLeft = isNodeInTree(root.left, node2)

  if (node1IsOnLeft !== node2IsOnLeft) return root

  const childSide = node1IsOnLeft ? root.left : root.right

  return commonAncestor(childSide, node1, node2)
}

const isNodeInTree = (root, node) => {
  if (root === null) return false

  if (root === node) return true

  return isNodeInTree(root.left, node) || isNodeInTree(root.right, node)
}

//          20
//        /   \
//      8      22
//    /   \
//  4     12
//       /  \
//     10    14

const root = new Node(20)
const node1 = new Node(8)
const node2 = new Node(22)
const node3 = new Node(4)
const node4 = new Node(12)
const node5 = new Node(10)
const node6 = new Node(14)

root.left = node1
root.right = node2

node1.left = node3
node1.right = node4

node4.left = node5
node4.right = node6

console.log(firstCommonAncestor(root, node5, node6))
console.log(firstCommonAncestor(root, node1, node6))

// Successor: write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.

const successor = (node) => {
  if (node == null) return null

  if (node.right != null) {
    return leftChild(node.right)
  }

  let current = node
  let parent = current.parent

  while (parent != null && parent.left != current) {
    current = parent
    parent = parent.parent
  }
  return parent
}

const leftChild = (node) => {
  if (node == null) return null

  while (node.left != null) {
    node = node.left
  }
  return node
}

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
    this.parent = null
  }
}

const node1 = new Node(20)
const node2 = new Node(8)
const node3 = new Node(4)
const node4 = new Node(12)
const node5 = new Node(10)
const node6 = new Node(14)
const node7 = new Node(22)

node1.left = node2
node1.right = node7

node2.parent = node1
node7.parent = node1

node2.left = node3
node2.right = node4

node3.parent = node2
node4.parent = node2

node4.left = node5
node4.right = node6

node5.parent = node4
node6.parent = node4

console.log(successor(node6))

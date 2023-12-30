const prompt = require('prompt-sync')()
const { printInorder } = require('./traversal')
// A binary tree is a data structure in which each node can have at most two children, which are referred to as the left child and the right child.

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
// Basic Operation on Binary Tree
// Inserting an element.
// Removing an element.
// Searching for an element.
// Deleting for an element.
// Traversal
function createTree() {
  let data
  let tree = new Node()

  data = prompt('\n Enter data or type -1 for no insertion : ')

  if (data == -1) return

  tree.data = data

  console.log('Enter left child of : ' + data)
  tree.left = createTree()

  console.log('Enter right child of: ' + data)
  tree.right = createTree()

  return tree
}

const root = createTree()

console.log(JSON.stringify(root))
console.log('in order')
printInorder(root)

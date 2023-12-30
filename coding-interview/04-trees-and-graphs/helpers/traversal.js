function printInorder(node) {
  if (node == null) return

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

const depthFirstSearch = (root) => {
  const stack = [root]
  const output = []

  while (stack.length > 0) {
    const current = stack.pop()
    output.push(current.data)
    if (current.right !== null) stack.push(current.right)
    if (current.left !== null) stack.push(current.left)
  }
  return output
}
const breadthFirstSearch = (root) => {
  const queue = [root]
  const output = []

  while (queue.length > 0) {
    const current = queue.shift()
    output.push(current.data)
    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }
  return output
}

module.exports = {
  printInorder,
  printPreorder,
  printPostorder,
  depthFirstSearch,
  breadthFirstSearch,
}

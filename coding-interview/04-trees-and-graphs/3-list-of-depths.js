// List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor(data) {
    this.head = data
    this.head = null
  }

  add(data) {
    let node = new Node(data)

    if (this.head === null) {
      this.head = node
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
    return
  }
}
class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
const listDepths = (tree) => {
  if (tree === null) return

  const queue = [tree]
  const linkedList = new LinkedList()

  while (queue.length > 0) {
    const current = queue.shift()
    linkedList.add(current.data)

    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }

  return linkedList
}

const a = new TreeNode('A')
const b = new TreeNode('B')
const c = new TreeNode('C')
const d = new TreeNode('D')
const e = new TreeNode('E')
a.left = b
a.right = c
b.left = d
b.right = e

console.log(listDepths(a))

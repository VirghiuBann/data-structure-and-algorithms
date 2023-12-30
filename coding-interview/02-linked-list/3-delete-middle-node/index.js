// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
//EXAMPLE
//input:the node c from the linked list a->b->c->d->e->f
//Result: nothing is returned, but the new linked list looks like a->b->d->e->f
const LinkedList = require('../helpers/singlyLinkedList')
const linkedList = new LinkedList()
const arTest = ['A', 'B', 'C', 'D', 'E', 'f', 'z']

for (const value of arTest) {
  linkedList.append(value)
}
const head = linkedList.getHead()

// main
function deleteNode(node) {
  if (!node || !node.next) return false

  let next = node.next
  node.data = next.data
  node.next = next.next
  return true
}

deleteNode(head.next)
linkedList.traverse()

// Loop detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINITION
//Circular list: A(corrupt) linked list in which a node's next points to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A->B->C->D->E->C [the same C as earlier]
//Output C

const { Node } = require('../helpers/node')

function loopDetection(head) {
  if (!head || !head.next) return false

  const hasMap = new Set()
  let current = head

  while (current !== null) {
    if (hasMap.has(current)) return current

    hasMap.add(current)

    current = current.next
  }

  return false
}
// test 1
console.log('== test 1==')
const node1 = new Node('A')
const node2 = new Node('B')
const node3 = new Node('C')
const node4 = new Node('D')
const node5 = new Node('E')
// linked list
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
//loop
node5.next = node3

console.log(loopDetection(node1))
// test 2
console.log('== test 2==')
const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
//loop
n5.next = n2
console.log(loopDetection(n1))

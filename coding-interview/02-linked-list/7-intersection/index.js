// Intersection: given two (singly) linked list, determine if the two lists intersect. Return the intersection node. Note that the intersection is defined based on reference. not value. That is, if the Kth node of the first linked list is the exact same node (by reference) as the Jth node of the second linked list, then they are interesting.
//Example
// 3->1->5->9-\
//             7->2->1
//       4->6-/

const { Node } = require('../helpers/node')
const LinkedList = require('../helpers/singlyLinkedList')
const { lengthLinkedList } = require('../helpers/utils')

function hasIntersection(head1, head2) {
  if (!head1 || !head2) return false

  const tailHead1 = getTail(head1)
  const tailHead2 = getTail(head2)

  if (tailHead1 !== tailHead2) {
    return false
  }

  const lengthHead1 = lengthLinkedList(head1)
  const lengthHead2 = lengthLinkedList(head2)

  let longerList = lengthHead1 > lengthHead2 ? head1 : head2
  let shorterList = lengthHead1 < lengthHead2 ? head1 : head2

  longerList = getStartLongerNode(longerList, lengthHead1, lengthHead2)

  while (longerList !== shorterList) {
    longerList = longerList.next
    shorterList = shorterList.next
  }

  return longerList

  function getStartLongerNode(longerList, length1, length2) {
    let current = longerList
    const differenceValue = Math.abs(length1 - length2)
    let count = 0
    while (count < differenceValue) {
      current = current.next
      count++
    }
    return current
  }

  // get tail of the linked list
  function getTail(list) {
    let current = list

    while (current.next !== null) {
      current = current.next
    }
    return current
  }
}

//test 1
//nodes
const nodeA = new Node(3)
const nodeB = new Node(1)
const nodeC = new Node(5)
const nodeD = new Node(9)

const nodeE = new Node(7)
const nodeF = new Node(2)
const nodeG = new Node(1)
// list 1
console.log('==test 1==')
nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = nodeE
nodeE.next = nodeF
nodeF.next = nodeG
// nodes
const nodeH = new Node(4)
const nodeI = new Node(6)
// list 2
nodeH.next = nodeI
// intersection
nodeI.next = nodeE
// outputs
// console.log(JSON.stringify(nodeA))
// console.log(JSON.stringify(nodeH))

console.log(hasIntersection(nodeA, nodeH))

// test 2
console.log('==test 2==')
const lA = new LinkedList()
const lB = new LinkedList()
const listA = [3, 1, 5, 9, 7, 2, 1]
const listB = [4, 6, 7, 2, 1]

lA.appendAll(listA)
lB.appendAll(listB)

console.log(hasIntersection(lA.getHead(), lB.getHead()))

// Partition Write code to partition a linked list around a value X, such that all nodes less than X come before all nodes greater than or equal to X. If X is contained within the list, the values of X only need to be after the elements less than X. The partition element X can appear anywhere in the "right partition"; it odes not need to appear between the left and right partitions.

// Input: 3->5->8->5->10->2->1 [partition=5]
// Output: 3->1->2->10->5->5->8

const LinkedList = require('../helpers/singlyLinkedList')
const { traverseLinkedList } = require('../helpers/utils')

// main function
function partition(head, x) {
  let smallerHead = null,
    lastSmallerHead = null
  let greaterHead = null,
    lastGreaterHead = null
  let equalHead = null,
    lastEqualHead = null

  if (!head) return false

  let current = head

  while (current !== null) {
    let node = { ...current }
    node.next = null
    if (current.data === x) {
      if (equalHead === null) {
        equalHead = lastEqualHead = node
      } else {
        lastEqualHead.next = node
        lastEqualHead = lastEqualHead.next
      }
    } else if (current.data < x) {
      if (smallerHead === null) {
        smallerHead = lastSmallerHead = node
      } else {
        lastSmallerHead.next = node
        lastSmallerHead = lastSmallerHead.next
      }
    } else {
      if (greaterHead === null) {
        greaterHead = lastGreaterHead = node
      } else {
        lastGreaterHead.next = node
        lastGreaterHead = lastGreaterHead.next
      }
    }
    current = current.next
  }

  let firstJoin = joinPartition(smallerHead, equalHead)
  let lastJoin = joinPartition(firstJoin, greaterHead)

  return lastJoin

  // join two partition
  function joinPartition(head1, head2) {
    if (!head1) return head2
    if (!head2) return head1

    let current = head1
    while (current.next) {
      current = current.next
    }
    current.next = head2
    return head1
  }
}

// partition 1
const l1 = new LinkedList()
const arrayTest1 = [3, 5, 8, 5, 10, 2, 1]
l1.appendAll(arrayTest1)
const head1 = l1.getHead()
// l1.traverse()
const p1 = partition(head1, 5)
traverseLinkedList(p1)

//partition 2
const l2 = new LinkedList()
const arrayTest2 = [1, 4, 3, 2, 5, 2, 3]
l2.appendAll(arrayTest2)
const head2 = l2.getHead()
const p2 = partition(head2, 3)
traverseLinkedList(p2)

//partition 3
const l3 = new LinkedList()
const arrayTest3 = [1, 4, 2, 10]
l3.appendAll(arrayTest3)
const head3 = l3.getHead()
const p3 = partition(head3, 3)
traverseLinkedList(p3)
//partition 4
const l4 = new LinkedList()
const arrayTest4 = [10, 4, 20, 10, 3]
l4.appendAll(arrayTest4)
const head4 = l4.getHead()
const p4 = partition(head4, 3)
traverseLinkedList(p4)

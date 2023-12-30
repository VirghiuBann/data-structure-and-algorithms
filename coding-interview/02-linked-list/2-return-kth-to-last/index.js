// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

// note that for this solution, we have defined K such that passing in K=1 would return the last element, K = 2 would return to the second to last element, and so on. It's equally acceptable to define to define K such that K=0 would return the last element.

const LinkedList = require('../helpers/singlyLinkedList')

const linkedList = new LinkedList()

const arTest = ['A', 'B', 'C', 'D', 'E', 'f', 'z']

for (const value of arTest) {
  linkedList.append(value)
}

const head = linkedList.getHead()

// main solutions

function kthToLast(head, k) {
  let pointer1 = head
  let pointer2 = head

  // k=0 would return the last element.
  k = k || 1

  for (let i = 0; i < k; i++) {
    if (pointer1 === null) return null

    pointer1 = pointer1.next
  }
  while (pointer1 !== null) {
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }
  return pointer2
}

console.log(kthToLast(head, 2))
console.log(kthToLast(head, 1))
console.log(kthToLast(head, 0))

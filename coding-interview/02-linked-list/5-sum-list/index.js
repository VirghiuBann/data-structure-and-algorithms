// Sum list, you have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

//Example
//Input: (7->1->6) + (5->9->2). That is, 617 + 295.
//Output: 2->1->9. That is, 912

const LinkedList = require('../helpers/singlyLinkedList')

// head1 and head2 same length
function sumList(head1, head2) {
  if (!head1 && !head2) return false
  let currentHead1 = head1
  let currentHead2 = head2
  let carry = 0
  const result = new LinkedList()

  while (currentHead1 !== null && currentHead2 !== null) {
    let sum = currentHead1.data + currentHead2.data + carry
    carry = Math.floor(sum / 10)
    result.append(sum % 10)
    currentHead1 = currentHead1.next
    currentHead2 = currentHead2.next
    if ((!currentHead1 || !currentHead2) && !!carry) {
      result.append(carry)
    }
  }

  return result
}

//test 1
const linkedList1 = new LinkedList()
const linkedList2 = new LinkedList()

const first = [7, 1, 6]
const second = [5, 9, 2]

linkedList1.appendAll(first)
linkedList2.appendAll(second)

const head1 = linkedList1.getHead()
const head2 = linkedList2.getHead()

const result = sumList(head1, head2)
result.traverse()

// test 2
console.log('==test2==')
const linkedList3 = new LinkedList()
const linkedList4 = new LinkedList()

const first1 = [3, 6, 5]
const second2 = [2, 4, 8]
//expected result 563 + 842 = 1405

linkedList3.appendAll(first1)
linkedList4.appendAll(second2)

const head3 = linkedList3.getHead()
const head4 = linkedList4.getHead()

const result1 = sumList(head3, head4)
result1.traverse()

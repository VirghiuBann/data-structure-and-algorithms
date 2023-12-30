// Sum list.
// Suppose the digits are stored in forward order. Repeat the above problem.

//Example
//Input: (6->1->7) + (2->9->5). That is, 617 + 295.
//Output: 9->1->2. That is, 912

const LinkedList = require('../helpers/singlyLinkedList')
const { traverseLinkedList, reverseLinkedList } = require('../helpers/utils')

// head1 and head2
function sumList(head1, head2) {
  if (!head1 && !head2) return false
  if (!head1) return head2
  if (!head2) return head1

  let currentHead1 = reverseLinkedList(head1)
  let currentHead2 = reverseLinkedList(head2)
  let carry = 0
  const result = new LinkedList()

  while (currentHead1 || currentHead2) {
    const dataHead1 = currentHead1 ? currentHead1.data : 0
    const dataHead2 = currentHead2 ? currentHead2.data : 0
    const sum = dataHead1 + dataHead2 + carry
    carry = Math.floor(sum / 10)
    result.append(sum % 10)

    if (currentHead1) currentHead1 = currentHead1.next
    if (currentHead2) currentHead2 = currentHead2.next
  }

  if (carry > 0) {
    result.append(carry)
  }

  return reverseLinkedList(result.getHead())
}

//test 1
const linkedList1 = new LinkedList()
const linkedList2 = new LinkedList()

const first = [6, 1, 7]
const second = [2, 9, 5]
// 617 + 295 = 912

linkedList1.appendAll(first)
linkedList2.appendAll(second)

const head1 = linkedList1.getHead()
const head2 = linkedList2.getHead()

const result = sumList(head1, head2)
traverseLinkedList(result)

// test 2
console.log('==test2==')
const linkedList3 = new LinkedList()
const linkedList4 = new LinkedList()

const first1 = [5, 6, 3, 2]
const second2 = [8, 4, 2]
// expected result 5632 + 842 = 6474

linkedList3.appendAll(first1)
linkedList4.appendAll(second2)

const head3 = linkedList3.getHead()
const head4 = linkedList4.getHead()

const result1 = sumList(head3, head4)
traverseLinkedList(result1)

//Palindrome: Implement a function to check if a linked list is a palindrome.
// To approach this problem, we can picture a palindrome like 0 - > 1 - > 2 - > 1 - > 0. We know that, since it's a palindrome, the list must be the same backwards and forwards. This leads us to our first solution.
const LinkedList = require('../helpers/singlyLinkedList')

function isPalindrome(head) {
  let fast = head
  let slow = head

  const stack = []

  while (fast !== null && fast.next !== null) {
    stack.push(slow.data)
    slow = slow.next
    fast = fast.next.next
  }

  if (fast !== null) {
    slow = slow.next
  }
  console.log(JSON.stringify(slow), stack)
  while (slow !== null) {
    let top = stack.pop()
    if (top !== slow.data) {
      return false
    }
    slow = slow.next
  }
  return true
}

//test 1
const l1 = new LinkedList()
const test = [0, 1, 2, 1, 0]
l1.appendAll(test)
const head = l1.getHead()
const result = isPalindrome(head)
console.log(result)
//test 2
const l2 = new LinkedList()
const test2 = ['R', 'A', 'D', 'A', 'R']
l2.appendAll(test2)
const head2 = l2.getHead()
const result2 = isPalindrome(head2)
console.log(result2)
//test 3
const l3 = new LinkedList()
const test3 = ['C', 'O', 'D', 'E']
l3.appendAll(test3)
const head3 = l3.getHead()
const result3 = isPalindrome(head3)
console.log(result3)

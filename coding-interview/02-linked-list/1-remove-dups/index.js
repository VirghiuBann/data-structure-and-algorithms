// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffers is not allowed?
const LinkedList = require('../helpers/singlyLinkedList')

const linkedList = new LinkedList()

const arTest = ['A', 'B', 'C', 'D', 'E', 'A', 'D']

for (const value of arTest) {
  linkedList.append(value)
}

const head = linkedList.getHead()

function deleteDups(head) {
  let current = head

  if (!current) return

  const hash = new Set()
  let previous = null

  while (current) {
    if (hash.has(current.data)) {
      previous.next = current.next
    } else {
      hash.add(current.data)
      previous = current
    }
    current = current.next
  }
}

console.table(JSON.stringify(linkedList))
linkedList.traverse()
deleteDups(head)
console.log('deleting ...')
linkedList.traverse()

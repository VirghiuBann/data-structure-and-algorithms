const traverseLinkedList = (head) => {
  let currentNode = head
  let values = ''

  while (currentNode) {
    values = values ? values + '->' + currentNode.data : currentNode.data
    currentNode = currentNode.next
  }
  console.log(values)
  return
}

const lengthLinkedList = (head) => {
  let count = 0
  let current = head
  while (current) {
    count++
    current = current.next
  }
  return count
}

const reverseLinkedList = (head) => {
  let prev = null
  let next = null
  let current = head

  while (current) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

module.exports = { traverseLinkedList, lengthLinkedList, reverseLinkedList }

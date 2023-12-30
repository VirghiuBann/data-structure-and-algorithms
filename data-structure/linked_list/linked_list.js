class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addNode(data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    return this
  }

  prependNode(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
    this.length++
    return this
  }

  searchNode(data) {
    let currentHead = this.head
    while (currentHead && currentHead.data !== data) {
      currentHead = currentHead.next
    }
    return !!currentHead ? true : false
  }

  deleteNode(data) {
    // if linked list is empty
    if (!this.head) {
      return false
    }

    let currentNode = this.head

    if (currentNode.data === data) {
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
      }
      return true
    }

    while (!!currentNode.next && currentNode.next.value !== data) {
      currentNode = currentNode.next
    }

    if (!!currentNode.next) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode
        this.tail.next = null
      } else {
        currentNode.next = currentNode.next.next
      }
      return true
    }
    return false
  }
}

const singleList = new SinglyLinkedList()
singleList.addNode('a')
singleList.addNode(2)
singleList.addNode(33)
// singleList.addNode(23)
// singleList.prependNode(9)
// console.log(singleList.searchNode(2))
// console.log(JSON.stringify(singleList))
// console.log(singleList.deleteNode(2))
console.log(JSON.stringify(singleList))

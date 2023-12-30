class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
  }

  addNode(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    if (this.head !== null) {
      this.head.prev = newNode
    }
    this.head = newNode
  }
}

const doubleLink = new DoubleLinkedList()
doubleLink.addNode(23)
doubleLink.addNode(5)
doubleLink.addNode(65)
console.log(doubleLink)

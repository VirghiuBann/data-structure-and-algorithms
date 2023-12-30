class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null
  }

  addNode(data) {
    const new_node = new Node(data)
    if (this.head === null) {
      this.head = new_node
      new_node.next = this.head
      return
    }

    let current = this.head
    while (current.next !== this.head) {
      current = current.next
    }
    current.next = new_node
    new_node.next = this.head
  }
}

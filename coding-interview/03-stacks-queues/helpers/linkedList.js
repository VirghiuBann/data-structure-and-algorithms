class Node {
  constructor(value) {
    this.data = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  prepend(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  removeTail() {
    let current = this.head

    if (!current) return null

    if (!current.next) {
      this.head = null
      return current
    }
    while (current.next.next) {
      current = current.next
    }
    const last = this.tail
    this.tail = current
    this.tail.next = null
    return last
  }
  removeFirst() {
    const first = this.head
    if (this.head && this.head.next) {
      this.head = this.head.next
      first.next = null
    } else {
      this.head = null
    }
    return first
  }

  getHead() {
    return this.head
  }
  getTail() {
    return this.tail
  }

  appendAll(datas) {
    for (const value of datas) {
      this.append(value)
    }
  }

  print() {
    let currentNode = this.head
    let linkedDatas = ''
    while (currentNode !== null) {
      linkedDatas = !!linkedDatas
        ? linkedDatas + '->' + currentNode.data
        : currentNode.data
      currentNode = currentNode.next
    }
    console.log('Linked list: ', linkedDatas)
  }
}

module.exports = {
  LinkedList,
}
// const linkedList = new LinkedList()

// linkedList.append(10)
// linkedList.append(20)
// linkedList.append(100)
// linkedList.prepend(50)
// linkedList.prepend(200)

// linkedList.print()

// console.log('head', linkedList.getHead())
// console.log('tail', linkedList.getTail())

// linkedList.removeFirst()
// linkedList.removeTail()

// linkedList.print()
// console.log('head', linkedList.getHead())
// console.log('tail', linkedList.getTail())

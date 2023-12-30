const { LinkedList } = require('./linkedList')

class QueueLinkedList {
  constructor() {
    this.itemsList = new LinkedList()
  }

  enqueue(data) {
    this.itemsList.append(data)
  }

  dequeue() {
    if (this.isEmpty()) return null

    const node = this.itemsList.removeFirst()

    return node.data
  }

  peek() {
    if (this.isEmpty()) return null
    const oldestNode = this.itemsList.getHead()
    return oldestNode.data
  }

  isEmpty() {
    return !this.itemsList.getHead()
  }

  getAll() {
    return this.itemsList.getHead()
  }

  print() {
    let currentNode = this.itemsList.getHead()
    const arrayQueue = []
    while (currentNode !== null) {
      arrayQueue.push(currentNode.data)
      currentNode = currentNode.next
    }
    console.log('queue list: ', arrayQueue)
  }
}

module.exports = { QueueLinkedList }

// const test1 = new QueueLinkedList()

// test1.enqueue(5)
// test1.enqueue(3)
// test1.enqueue(2)
// test1.print() // [5, 3, 2]
// console.log(test1.dequeue()) // 5
// test1.print() // [3, 2]
// console.log(test1.peek()) // 5

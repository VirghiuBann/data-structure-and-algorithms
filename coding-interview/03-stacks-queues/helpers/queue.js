class Queue {
  constructor() {
    this.items = []
  }

  enqueue(value) {
    this.items.push(value)
  }

  dequeue() {
    if (this.isEmpty()) return null

    return this.items.shift()
  }

  peek() {
    if (this.isEmpty()) return null

    return this.items[0]
  }

  isEmpty() {
    return !this.items.length
  }

  size() {
    return this.items.length
  }

  printQueue() {
    console.log('Queue:', this.items)
  }
}

module.exports = {
  Queue,
}

const q1 = new Queue()

q1.enqueue(5)
q1.enqueue(15)
q1.enqueue(25)
q1.enqueue(55)

q1.printQueue()

q1.dequeue()
q1.dequeue()
q1.printQueue()

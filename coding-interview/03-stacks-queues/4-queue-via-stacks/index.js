// Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.stackOldest = []
    this.stackNewest = []
  }

  enqueue(item) {
    this.stackNewest.push(item)
  }

  dequeue() {
    if (!this.stackOldest.length) {
      while (stackNewest.length > 0) {
        this.stackOldest.push(this.stackNewest.pop())
      }
    }
    if (!this.stackOldest.length) return null

    return this.stackOldest.pop()
  }

  peek() {
    if (!this.stackOldest.length) {
      while (this.stackNewest.length > 0) {
        this.stackOldest.push(this.stackNewest.pop())
      }
    }
    if (!this.stackOldest) return null

    return this.stackOldest[this.stackOldest.length - 1]
  }

  printQueue() {
    console.log('stackNewest', this.stackNewest)
    console.log('stackOldest', this.stackOldest)
  }
}

const myQ = new MyQueue()

myQ.enqueue(10)
myQ.enqueue(100)
myQ.enqueue(40)
myQ.enqueue(200)

myQ.printQueue()

console.log(myQ.peek())
myQ.enqueue(440)
myQ.enqueue(500)

console.log(myQ.dequeue())

myQ.printQueue()

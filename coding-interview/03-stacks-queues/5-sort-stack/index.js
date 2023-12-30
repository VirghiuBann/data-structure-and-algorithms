// Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure  (such as an array). The stack supports the following operations: push, pop, peek and isEmpty.
const { Stack } = require('../helpers/stack.js')
class SortStack extends Stack {
  constructor() {
    super()
    this.tempStack = new Stack()
  }

  sortStack() {
    if (super.isEmpty()) return null

    while (super.size() > 0) {
      let tmp = this.pop()
      while (this.tempStack.size() > 0 && this.tempStack.top() < tmp) {
        super.push(this.tempStack.pop())
      }
      this.tempStack.push(tmp)
    }

    return this.tempStack.getAll()
  }

  pop() {
    if (this.isEmpty()) return null

    return this.tempStack.pop()
  }
  push(item) {
    this.tempStack.push(item)
  }
  peek() {
    if (this.isEmpty()) return null

    return this.tempStack.peek()
  }
  isEmpty() {
    return this.tempStack.isEmpty()
  }
  getAll() {
    return this.tempStack.getAll()
  }
  printStack() {
    console.log('Sorted stack min values on the top ', this.tempStack.getAll())
  }
}

const sortStack = new SortStack()

const stackTest1 = [7, 10, 5, 12, 8, 3, 1]
sortStack.pusAll(stackTest1)
sortStack.sortStack()
sortStack.printStack()
console.log('popping')
console.log(sortStack.pop())
sortStack.printStack()

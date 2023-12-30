// A stack is a linear data structure that follows the principle of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first.

class Stack {
  constructor(size = []) {
    this.items = size
  }

  // push() to insert an element into the stack
  push(element) {
    this.items.push(element)
  }
  pusAll(values) {
    for (const val of values) {
      this.push(val)
    }
  }
  // pop() to remove an element from the stack
  pop() {
    if (!this.items.length) return false

    return this.items.pop()
  }
  // top() Returns the top element of the stack.
  top() {
    if (!this.items.length) return false

    return this.items[this.items.length - 1]
  }
  // isEmpty() returns true if stack is empty else false.
  isEmpty() {
    return !this.items.length
  }
  // size() returns the size of stack.
  size() {
    return this.items.length
  }

  getAll() {
    return this.items
  }

  printStack() {
    console.log('Items in stack:', this.items)
  }
}

module.exports = {
  Stack,
}

// test 1
// const s1 = new Stack()
// const arrTest = [2, 5, 6, 9]
// s1.pusAll(arrTest)
// s1.printStack()
// console.log(s1.pop())
// s1.printStack()
// console.log(s1.top())
// console.log(s1.size())
// console.log(s1.isEmpty())

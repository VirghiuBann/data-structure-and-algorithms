// Stack Min: How would you design a stack which, in addition to push and pop, has a function "min" which returns the minimum element? Push, pop and min should all operate in O(1) time.
const { Stack } = require('../helpers/stack')

class StackMin extends Stack {
  constructor() {
    super()
    this.minStack = new Stack()
    this.min = null
  }

  push(item) {
    super.push(item)
    if (this.min === null || item <= this.min) {
      this.minStack.push(item)
      this.min = item
    }
    return true
  }
  pop() {
    if (super.isEmpty()) return false

    const poppedItem = super.pop()
    if (poppedItem === this.minStack.top()) {
      this.minStack.pop()
      this.min = this.minStack.top()
    }
    return poppedItem
  }

  minElem() {
    return this.min
  }
}

const stackMin = new StackMin()

stackMin.push(100)
stackMin.push(200)
stackMin.push(190)
stackMin.push(50)
stackMin.push(100)
stackMin.push(120)
stackMin.push(160)
stackMin.push(10)
stackMin.push(30)
stackMin.push(10)

stackMin.printStack()

stackMin.pop()
console.log(stackMin.minElem())

stackMin.pop()
console.log(stackMin.minElem())

console.log(stackMin.minElem())
stackMin.printStack()

//Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. (that is, pop() should return the same values as it would if there were just a single stack).

//FOLLOW UP : Implement a function popAt(int index) which performs a pop operation on a specific sub-stack
const { Stack } = require('../helpers/stack')

class SetOfStacks {
  constructor(threshold) {
    this.thresholdStack = threshold
    this.stacks = []
  }

  push(item) {
    const lastStack = this.getLasStack()

    if (!!lastStack && lastStack.length < this.thresholdStack) {
      lastStack.push(item)
    } else {
      const newStack = new Stack()
      newStack.push(item)
      this.stacks.push(newStack.items)
    }
  }

  pop() {
    if (this.isEmpty()) return null

    let lastStack = this.getLasStack()
    if (lastStack.length === 0) {
      this.stacks.pop()
      lastStack = this.getLasStack()
    }

    return !!lastStack ? lastStack.pop() : null
  }

  popAt(index) {
    if (index < 0 || index >= this.stacks.length) return false

    const item = this.stacks[index].pop()

    if (this.stacks[index].length === 0) {
      this.stacks.splice(index, 1)
    }
    return item
  }

  getLasStack() {
    if (this.isEmpty()) return null

    return this.stacks[this.stacks.length - 1]
  }

  isEmpty() {
    return !this.stacks.length
  }

  printStacks() {
    console.log(`${JSON.stringify(this.stacks)}`)
  }
}

const test1 = new SetOfStacks(3)
test1.push(50)
test1.push(60)
test1.push(70)
test1.push(90)
test1.push(1)
test1.push(2)
test1.push(3)

test1.printStacks()

// pop
console.log('popping.....')
console.log('popped', test1.pop())
console.log('popped', test1.pop())
// console.log('popped', test1.pop())
// console.log('popped', test1.pop())
// console.log('popped', test1.pop())
// console.log('popped', test1.pop())
// console.log('popped', test1.pop())
// console.log('popped', test1.pop())
test1.printStacks()

console.log('pop at')
console.log('popped', test1.popAt(0))
test1.printStacks()

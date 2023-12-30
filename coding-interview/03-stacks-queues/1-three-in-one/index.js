// Three in One: Describe how you could use a single array to implement three stacks.

class ThreeInOne {
  constructor(size) {
    this.nStacks = 3
    this.sizeArray = size
    this.arrayStacks = Array(size).fill(null)
    this.top1 = Math.floor(size / this.nStacks)
    this.top2 = Math.floor((2 * size) / this.nStacks)
    this.top3 = Math.floor((3 * size) / this.nStacks) - 1
  }

  push1(elem) {
    if (this.top1 > 0) {
      this.top1--
      this.arrayStacks[this.top1] = elem
      return
    } else {
      console.log('Stack 1: Stack overflow')
      return
    }
  }
  pop1() {
    if (this.existTop1()) {
      const elem = this.arrayStacks[this.top1]
      this.arrayStacks[this.top1] = null
      this.top1++
      return elem
    }
    console.log('Stack 1 is empty')
    return false
  }

  push2(elem) {
    if (this.top2 > Math.floor(this.sizeArray / this.nStacks)) {
      this.top2--
      this.arrayStacks[this.top2] = elem
      return
    }
    console.log('Stack 2: Stack overflow')
    return
  }
  pop2() {
    if (this.existTop2()) {
      const elem = this.arrayStacks[this.top2]
      this.arrayStacks[this.top2] = null
      this.top2++
      return elem
    }
    console.log('Stack 2 is empty')
    return false
  }

  push3(elem) {
    if (this.top3 > Math.floor((2 * this.sizeArray) / this.nStacks)) {
      this.top3--
      this.arrayStacks[this.top3] = elem
      return
    }
    console.log('Stack 3: Stack overflow')
    return
  }

  pop3() {
    if (this.existTop3()) {
      const elem = this.arrayStacks[this.top3]
      this.arrayStacks[this.top3] = null
      this.top3++
      return elem
    }
    console.log('Stack 3 is empty')
    return false
  }

  peek(nStack) {
    switch (nStack) {
      case 1:
        if (this.existTop1()) {
          const elem = this.arrayStacks[this.top1]
          return elem
        }
        console.log('Stack 1 is empty')
        break
      case 2:
        if (this.existTop2()) {
          const elem = this.arrayStacks[this.top2]

          return elem
        }
        console.log('Stack 2 is empty')
        break
      case 3:
        if (this.existTop3()) {
          const elem = this.arrayStacks[this.top3]
          return elem
        }
        console.log('Stack 3 is empty')
        break
    }
  }

  existTop1() {
    return (
      this.top1 >= 0 && this.top1 < Math.floor(this.sizeArray / this.nStacks)
    )
  }
  existTop2() {
    return this.top2 < Math.floor((2 * this.sizeArray) / this.nStacks)
  }
  existTop3() {
    return this.top3 < Math.floor((3 * this.sizeArray) / this.nStacks) - 1
  }
}

const aStacks = new ThreeInOne(10)
console.log(aStacks)
console.log('pushing')
aStacks.push1(110)
aStacks.push3(310)
aStacks.push2(200)

aStacks.push3(300)
aStacks.push1(120)
aStacks.push2(210)

aStacks.push2(260)
aStacks.push1(130)
aStacks.push3(320)

aStacks.push2(150)
aStacks.push1(140)
aStacks.push3(330)
console.log(aStacks)
// pop
console.log('POP')
console.log(aStacks.pop1())
// console.log(aStacks.pop1())
// console.log(aStacks.pop1())
// console.log(aStacks.pop1())

// console.log(aStacks.pop2())
// console.log(aStacks.pop2())
// console.log(aStacks.pop2())
// console.log(aStacks.pop2())
// console.log(aStacks.pop2())

console.log(aStacks.pop3())
console.log(aStacks.pop3())
// console.log(aStacks.pop3())
// console.log(aStacks.pop3())
// console.log(aStacks.pop3())
console.log('peek')
console.log(aStacks.peek(1))
console.log(aStacks.peek(2))
console.log(aStacks.peek(3))

console.log(aStacks)

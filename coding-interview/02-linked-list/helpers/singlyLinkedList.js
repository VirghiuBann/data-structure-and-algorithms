class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  getHead() {
    return this.head
  }

  append(data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = newNode

    return
  }

  appendAll(datas) {
    for (const value of datas) {
      this.append(value)
    }
  }

  remove(data) {
    if (!this.head) return

    if (this.head.data === data) {
      this.head = this.head.next
      return
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
      }
      current = current.next
    }
    return
  }

  traverse() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
    return
  }

  search(data) {
    if (!this.head) return null

    if (this.head.data === data) {
      return this.head.data
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        return current.next.data
      }
      current = current.next
    }
    return null
  }

  getLength() {
    let count = 0
    let current = this.head
    while (current) {
      count++
      current = current.next
    }
    return count
  }
}

module.exports = LinkedList

// const linkedList = new LinkedList()

// const arTest = ['A', 'B', 'C', 'D', 'E']

// for (const value of arTest) {
//   linkedList.append(value)
// }

// console.table(JSON.stringify(linkedList))
// linkedList.traverse()
// console.log('removing')
// linkedList.remove('C')
// console.log('result...')
// linkedList.traverse()
// console.log('searching ...')
// console.log(linkedList.search('E'))
// console.log(linkedList.search('P'))

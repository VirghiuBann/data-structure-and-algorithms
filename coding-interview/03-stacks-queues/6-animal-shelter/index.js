// Animal shelter: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animals they would like.
//Create the data structure to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.You may use the built-in LinkedList data structure.

const { QueueLinkedList } = require('../helpers/queueLinkedList')

class AnimalShelter {
  constructor() {
    this.dogQueue = new QueueLinkedList()
    this.catQueue = new QueueLinkedList()
    this.allQueues = new QueueLinkedList()
    this.tmpQueue = new QueueLinkedList()
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dogQueue.enqueue(animal)
    } else if (animal.type === 'cat') {
      this.catQueue.enqueue(animal)
    }
    this.allQueues.enqueue(animal)
  }
  dequeueAny() {
    if (this.allQueues.peek() === this.dogQueue.peek()) {
      this.dogQueue.dequeue()
    } else if (this.allQueues.peek() === this.catQueue.peek()) {
      this.catQueue.dequeue()
    }
    return this.allQueues.dequeue()
  }

  dequeueDog() {
    if (this.allQueues.isEmpty() || this.dogQueue.isEmpty()) return null

    const oldDogRemoved = this.dequeueByType(this.dogQueue.peek())
    this.dogQueue.dequeue()
    return oldDogRemoved
  }
  dequeueCat() {
    if (this.allQueues.isEmpty() || this.catQueue.isEmpty()) return null

    const oldCatRemoved = this.dequeueByType(this.catQueue.peek())
    this.catQueue.dequeue()
    return oldCatRemoved
  }

  dequeueByType(animal) {
    let oldAnyNode = this.allQueues.dequeue()

    while (oldAnyNode.type !== animal.type) {
      this.tmpQueue.enqueue(oldAnyNode)
      oldAnyNode = this.allQueues.dequeue()
    }

    while (!this.allQueues.isEmpty()) {
      this.tmpQueue.enqueue(this.allQueues.dequeue())
    }

    while (!this.tmpQueue.isEmpty()) {
      this.allQueues.enqueue(this.tmpQueue.dequeue())
    }

    return oldAnyNode
  }

  printAll() {
    console.log('Dogs')
    console.log(`Dog queue: ${JSON.stringify(this.dogQueue.getAll())}`)
    console.log('Cats')
    console.log(`Cat queue: ${JSON.stringify(this.catQueue.getAll())}`)
    console.log('All')
    console.log(`All queues: ${JSON.stringify(this.allQueues.getAll())}`)
  }

  printAllArray() {
    this.allQueues.print()
  }

  printDogArray() {
    this.dogQueue.print()
  }

  printCatArray() {
    this.catQueue.print()
  }
}

const test1 = new AnimalShelter()
console.log('==Insert===')
test1.enqueue({ type: 'cat', name: 'Mittens' })
test1.enqueue({ type: 'dog', name: 'Barky' })
test1.enqueue({ type: 'cat', name: 'Eliot' })
test1.enqueue({ type: 'dog', name: 'Thor' })

console.log('==Print original nodes===')
test1.printDogArray()
test1.printCatArray()
test1.printAllArray()

console.log('==dequeue dog===')
console.log(test1.dequeueDog())
console.log('==current queue==')
test1.printDogArray()
test1.printCatArray()
test1.printAllArray()
console.log('==dequeue cat===')
console.log(test1.dequeueCat())
test1.printAllArray()
test1.printDogArray()
test1.printCatArray()

// Random Node: You are implementing a binary search tree class from scratch, which, in addition to insert, find and delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomRandom, and explain how you would implement the rest of the methods.

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
    this.size = 0
  }

  insert(data) {
    this.root = this.insertNode(this.root, data)
  }

  insertNode(root, data) {
    if (root === null) {
      root = new Node(data)
      this.size++

      return root
    }

    if (data < root.data) {
      root.left = this.insertNode(root.left, data)
    } else {
      root.right = this.insertNode(root.right, data)
    }

    return root
  }

  find(data) {
    return this.findNode(this.root, data)
  }

  findNode(root, data) {
    if (root === null) {
      return null
    }

    if (data < root.data) {
      return this.findNode(root.left, data)
    } else if (data > root.data) {
      return this.findNode(root.right, data)
    } else {
      return root
    }
  }

  delete(data) {
    this.root = this._deleteNode(this.root, data)
  }

  _deleteNode(root, data) {
    if (root === null) {
      return null
    }

    if (data < root.data) {
      root.left = this._deleteNode(root.left, data)
    } else if (data > root.data) {
      root.right = this._deleteNode(root.right, data)
    } else {
      if (root.left === null && root.right === null) {
        return null
      }

      if (root.left === null) {
        return root.right
      } else if (root.right === null) {
        return root.left
      }

      const minNode = this.findMinNode(root.right)
      root.data = minNode.data
      this.size--
      root.right = this._deleteNode(root.right, minNode.data)
    }

    return root
  }

  findMinNode(root) {
    if (root.left === null) {
      return root
    }

    return this.findMinNode(root.left)
  }

  getRandomRandom() {
    if (this.root === null) return null

    const randomIndex = Math.floor(Math.random() * this.size)

    const arrayTree = []
    const queue = [this.root]

    while (queue.length > 0) {
      const node = queue.shift()
      arrayTree.push(node.data)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    const nodeValue = arrayTree[randomIndex - 1]

    return this.find(nodeValue)
  }
}

const bst = new BST(null)
bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(17)

console.log('bst.root')
console.log(bst)
console.log('bst.delete(5)')
console.log(bst.delete(5))
console.log('bst.find(10)')
console.log(bst.find(10))
console.log('bst.root')
console.log(bst)
console.log('bst.getRandomRandom()')
console.log(bst.getRandomRandom())

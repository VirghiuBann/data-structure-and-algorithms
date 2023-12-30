## 2. Linked List Data Structure

```js
const head; // head of list

class Node {
  // constructor to create a new node
  constructor(data) {
    this.data = dada;
    this.next = null;
  }
}
```

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

### Node Structure consists of two components:

- **Data:** It hold the actual value.
- **Next Pointer:** It stores the memory address of the next node.
- **Head and Tail:** Linked list is accessed through the head node, which points to the first node in the list. The last node in the list points to NULL, this node is known as the tail node.

### Why linked list data structure needed?

- **Dynamic data structure:** The size of memory can be allocated or de-allocated.
- **Ease of Insertion and Deletion:** Simpler than arrays, just the address needed to be updated.
- **Efficient Memory Utilization:** The size increases or decreases as per the requirement so this avoids the wastage of memory.
- **Implementation:** Data structures can be implemented using a linked list like a stack, queue, graph, hash maps, etc.

### Types of linked lists:

- **single linked list**: Each node contains a reference to the next node in the sequence.
- **double-linked list**: each node contains reference to both the next and the previous nodes.
- **Circular linked list**: the last node points back to the head node, creating a circular structure, it can be either singly or doubly linked.

### Operation on Linked Lists

- Insertion
- deletion
- Searching

### Advantages of Linked Lists

- Dynamic Size: Can grow or shrink dynamically.
- Insertion and deletion:
- Flexibility: not requiere continuos block of memory.

### Disadvantages of Linked List

- Random Access: Traversal is required to reach a specific node.
- Extra memory: additional memory for sorting the pointers.

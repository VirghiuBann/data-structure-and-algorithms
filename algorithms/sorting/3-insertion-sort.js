// Insertion sort works similarly as we sort cards in our hand in a card game.
// We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place.

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
}

const arr = [9, 5, 1, 4, 3]
insertionSort(arr)
console.log(arr)

// Time complexity is O(n^2)
// Space complexity is O(1)

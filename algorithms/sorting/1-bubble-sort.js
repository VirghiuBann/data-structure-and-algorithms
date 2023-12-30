// Bubble sort compares two adjacent elements and swaps them until they are in the intended order.

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        swapped = true
      }
    }
    if (!swapped) break
  }
}

const unsortedArray = [-2, 45, 0, 11, -9, 6, 20]
bubbleSort(unsortedArray)
console.log(unsortedArray)

// Radix sort is a sorting algorithm that sorts the elements by first grouping the individual digits of the same place, then sort elements according to their increasing/decreasing order.

// a = [121, 432, 564, 23, 1, 45, 788]
// Sorting the integers according to units, tens and hundreds place digits.

//  1 2 1     0 0 1     0 0 1
//  0 0 1     1 2 1     0 2 3
//  4 3 2     0 2 3     0 4 5
//  0 2 3     4 3 2     1 2 1
//  5 6 4     0 4 5     4 3 2
//  0 4 5     5 6 4     5 6 4
//  7 8 8     7 8 8     7 8 8

// Find the largest element in the array "max" and "x" number of digits.
// max = 788 and x = 3
// Now, go through each significant place one by one. we're going to use counting sort for this.

const radixSort = (arr) => {
  // Find the maximum number to determine the number of digits
  const max = Math.max(...arr)

  // Iterate through each digit place value (i.e., units, tens, hundreds, etc.)
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp)
  }
}

// Helper function for Counting Sort within Radix Sort
const countingSort = (arr, exp) => {
  // Initialize an array to store the count of occurrences for each digit (0-9)
  const countArr = new Array(10).fill(0)
  // Initialize an array to store the sorted output
  const output = new Array(arr.length).fill(0)

  // Step 1: Count the occurrences of each digit at the current place value
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(arr[i] / exp) % 10
    countArr[index]++
  }

  // Step 2: Modify countArr to store the position of each digit in the sorted output
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1]
  }

  // Step 3: Build the sorted output array
  let arrLength = arr.length - 1
  for (let i = arrLength; i >= 0; i--) {
    const countingIndex = Math.floor(arr[i] / exp) % 10
    const outputIndex = countArr[countingIndex] - 1
    output[outputIndex] = arr[i]
    countArr[countingIndex]--
  }

  // Step 4: Copy the sorted output back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i]
  }
}

// Test array
const test = [121, 432, 564, 23, 1, 45, 788]
radixSort(test)
console.log(test)

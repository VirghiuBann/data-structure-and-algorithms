// Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.
// [64, 25, 12, 22, 11]
// select the first element as minimum = 64
// compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum. 25 < 62 then minimum = 25

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
}

const arr = [64, 25, 12, 22, 11]
selectionSort(arr)
console.log(arr)

console.log('test 2')
const arr1 = [20, 12, 10, 15, 2]
selectionSort(arr1)
console.log(arr1)

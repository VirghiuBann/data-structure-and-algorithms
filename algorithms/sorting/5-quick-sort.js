// QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
// {10,80,30,90,40,50,70}
// Partition around 70 last element
// {10,30,40,50}              {90,80}
// Partition around 50        Partition 80
// {10,30,40}                  {90}
// Partition around 40
// {10,30}
// Partition around 30
// {10}

const quickSort = (arr, start, end) => {
  if (end <= start) return // base case

  const pivotIndex = partition(arr, start, end)

  quickSort(arr, start, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, end)
}

const partition = (arr, start, end) => {
  const pivot = arr[end]
  let i = start - 1
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  i++
  let temp = arr[i]
  arr[i] = arr[end]
  arr[end] = temp

  return i
}

const arr = [8, 7, 6, 1, 0, 9, 2]
quickSort(arr, 0, arr.length - 1)
console.log(arr)

const arr1 = [10, 80, 30, 90, 40, 50, 70]
quickSort(arr1, 0, arr1.length - 1)
console.log(arr1)

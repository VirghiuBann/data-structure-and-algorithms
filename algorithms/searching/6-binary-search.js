const binarySearch = (arr, target) => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const midElement = arr[mid]

    if (midElement === target) return mid

    if (midElement < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

const arr = [2, 3, 4, 10, 40, 50, 70]

console.log(binarySearch(arr, 10))

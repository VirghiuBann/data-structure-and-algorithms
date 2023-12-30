const transpositionLinearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      if (i > 0) {
        let temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
      }
      return i
    }
  }
  return -1
}

const arr = [2, 5, 7, 1, 6, 4, 5, 8, 3, 7]
console.log(transpositionLinearSearch(arr, 6))
console.log(arr)

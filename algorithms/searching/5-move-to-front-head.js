const moveToFrontHeadLinearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      let temp = arr[i]
      arr[i] = arr[0]
      arr[0] = temp
      return i
    }
  }
  return -1
}

const arr = [2, 5, 7, 1, 6, 4, 5, 8, 3, 7]
console.log(moveToFrontHeadLinearSearch(arr, 6))
console.log(arr)

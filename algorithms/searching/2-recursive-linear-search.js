const linearSearch = (arr, size, target) => {
  if (size === 0) return -1

  if (arr[size - 1] === target) return size - 1

  return linearSearch(arr, size - 1, target)
}

const arr = [5, 15, 6, 9, 4]
const target = 6

console.log(linearSearch(arr, arr.length, target))

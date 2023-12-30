const sentinelSearch = (arr, size, target) => {
  const last = arr[size - 1]

  arr[size - 1] = target
  let i = 0

  while (arr[i] !== target) {
    i++
  }
  arr[size - 1] = last

  if (i < size - 1 || arr[size - 1] === target) return i

  return -1
}

const arr = [40, 2, 3, 4, 10, 80]
const x = 4

console.log(sentinelSearch(arr, arr.length, x))

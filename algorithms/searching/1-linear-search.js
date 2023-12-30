const search = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

const arr = [40, 2, 3, 4, 10, 80]
const x = 4
console.log(search(arr, x))

// Merge Sort Algorithm is based on the principle of Divide and Conquer. Using the Divide and Conquer technique, we divide a problem into sub-problems. When the solution to each subproblem is ready, we 'combine' the results from the sub-problems to solve the main problem.

//          [6,5,12,10,9,1]
//          /            \
//      [6,5,12]        [10,9,1]
//     /    \           /    \
//  [6]   [5,12]      [10]  [9,1]
//  /      / \         /    / \
// [6]  [5] [12]    [10]  [9] [1]
//  |    \   /       |     \  /
// [6]   [5,12]     [10]   [1,9]
//   \     /         \     /
//  [5,6,12]         [1,9,10]
//        \          /
//        [1,5,6,9,10]

const mergeSort = (arr) => {
  if (arr.length === 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid, arr.length))

  return merge(left, right)
}

const merge = (left, right) => {
  const arrMerge = []
  let i = 0,
    j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arrMerge.push(left[i])
      i++
    } else {
      arrMerge.push(right[j])
      j++
    }
  }

  while (i < left.length) {
    arrMerge.push(left[i])
    i++
  }

  while (j < right.length) {
    arrMerge.push(right[j])
    j++
  }

  return arrMerge
}

const a = [6, 5, 12, 10, 9, 1]
const result = mergeSort(a)
console.log(result)

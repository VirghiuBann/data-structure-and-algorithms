// Counting sort algorithm, sort the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliar array and the sorting is done by mapping the count as an index of the auxiliar array.
// [4,2,2,8,3,3,1]
// find out the maximum element: max = 8

// Initialize an array of length max+1 with all elements 0. This array is used to storing the count of the elements in the array.
// array [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]
// index   0   1   2   3   4   5   6   7   8

// Store the count of each element at their respective index in count array
// [4,2,2,8,3,3,1]
// array [ 0 , 1 , 2 , 2 , 1 , 0 , 0 , 0 , 1 ]
// index   0   1   2   3   4   5   6   7   8

// Store cumulative sum of the elements of the count array.
// array [ 0 , 1 , 3 , 5 , 6 , 6 , 6 , 6 , 7 ]
// index   0   1   2   3   4   5   6   7   8

//  Find the index of each element of the original array in the count array. Iterate from end of the the input array.

// original  [4,2,2,8,3,3,1] elem 1
//count[1] = 1, then 1 - 1 = 0
// count array [ 0 , 1 , 3 , 5 , 6 , 6 , 6 , 6 , 7 ] update count[1] = 0 for next iteration
// index       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
// output      [ 1 , 0 , 0 , 0 , 0 , 0 , 0 ] pos[0] = 1

// original array  [4,2,2,8,3,3,1] elem 3
//count[3] = 5, then 5 - 1 = 4
// count array [ 0 , 0 , 3 , 5 , 6 , 6 , 6 , 6 , 7 ] update elem count[3] = 4 for next iteration
// index       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
// output      [ 1 , 0 , 0 , 0 , 3 , 0 , 0 ]
// original array  [4,2,2,8,3,3,1] elem 3
//count[3] = 4, then 4 - 1 = 3
// count array [ 0 , 0 , 3 , 4 , 6 , 6 , 6 , 6 , 7 ] update elem count[3] = 3 for next iteration
// index       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
// output      [ 1 , 0 , 0 , 3 , 3 , 0 , 0 ] pos[3]=3

// original array  [4,2,2,8,3,3,1] elem 8
//count[8] = 7, then 7 - 1 = 6
// count array [ 0 , 0 , 3 , 3 , 6 , 6 , 6 , 6 , 7 ] update elem count[8] = 6 for next iteration
// index       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
// output      [ 1 , 0 , 0 , 3 , 3 , 0 , 8 ] pos[6]=8

// original array  [4,2,2,8,3,3,1] elem 2
//count[2] = 3, then 3 - 1 = 2
// count array [ 0 , 0 , 3 , 3 , 6 , 6 , 6 , 6 , 6 ] update elem count[2] = 2 for next iteration
// index       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
// output      [ 1 , 0 , 2 , 3 , 3 , 0 , 8 ] pos[2]=2

// original array  [4,2,2,8,3,3,1] elem 2
//count[2] = 2, then 2 - 1 = 1
// count array [ 0 , 0 , 2 , 3 , 6 , 6 , 6 , 6 , 6 ] update elem count[2] = 1 for next iteration
// index       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
// output      [ 1 , 2 , 2 , 3 , 3 , 0 , 8 ] pos[1]=2

// original array  [4,2,2,8,3,3,1] elem 4
//count[4] = 6, then 6 - 1 = 5
// count array [ 0 , 0 , 2 , 3 , 6 , 6 , 6 , 6 , 6 ] update elem count[4] = 5 for next iteration
// index       | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
// output      [ 1 , 2 , 2 , 3 , 3 , 4 , 8 ] pos[5]=4

const countingSort = (arr) => {
  const max = Math.max(...arr)
  const countArr = new Array(max + 1).fill(0)

  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]]++
  }

  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1]
  }
  let i = arr.length - 1
  const output = new Array(arr.length).fill(0)
  while (i >= 0) {
    output[countArr[arr[i]] - 1] = arr[i]
    countArr[arr[i]]--
    i--
  }

  return output
}

const arr = [4, 2, 2, 8, 3, 3, 1]
const sorted = countingSort(arr)
console.log(sorted)

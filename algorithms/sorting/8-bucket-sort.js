// Bucket sort divides the unsorted array elements into several buckets. Each bucket is sorted individually, and then the buckets are concatenated to form the sorted array.
// Scatter Gather Approach:
//    [ 11, 9, 21, 8, 17, 19, 13, 1, 24, 12 ]
//                 | Scatter
//     _____       _____     _____     _____     _____
//    |    |      |  9 |    | 11  |    | 17|    |21  |
//    | 1  |      | 8  |    |13 12|    |19 |    |24  |
//    |____|      |____|    |____|    |____|    |____|
//     0-5         5-10      10-15      15-20   20-25
//                 | Sort
//     _____       _____     _____     _____     _____
//    |    |      |  8 |    | 11  |    | 17|    |21  |
//    | 1  |      | 9  |    |12 13|    |19 |    |24  |
//    |____|      |____|    |____|    |____|    |____|
//     0-5         5-10      10-15      15-20   20-25
//                 | Gather
//  [ 1, 8, 9, 11, 12, 13, 17, 19, 21, 24 ]

const bucketSort = (arr) => {
  let buckets = []

  // Determine whether the array contains integers or floats
  buckets = arr.every((item) => Number.isInteger(item))
    ? bucketForInts(arr)
    : bucketForFloats(arr)

  // Sort each bucket individually
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b)
  }

  // Concatenate the sorted buckets to obtain the final sorted array
  let k = 0
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[k] = buckets[i][j]
      k++
    }
  }
}

const bucketForInts = (arr) => {
  // Find the minimum and maximum values in the array
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  // Calculate the number of buckets based on the array length
  const bucketCount = Math.floor((max - min) / arr.length) + 1
  const buckets = new Array(bucketCount).fill(0).map(() => [])

  // Distribute elements into buckets
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / arr.length)
    buckets[bucketIndex].push(arr[i])
  }

  return buckets
}

const bucketForFloats = (arr) => {
  // Set a fixed number of buckets for float values
  const bucketCount = 10
  const buckets = new Array(bucketCount).fill(0).map(() => [])

  // Distribute elements into buckets based on their value multiplied by the number of buckets
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor(arr[i] * bucketCount)
    buckets[bucketIndex].push(arr[i])
  }

  return buckets
}

const a = [11, 9, 21, 8, 17, 19, 13, 1, 24, 12]
bucketSort(a)
console.log(a)
const b = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51]
bucketSort(b)
console.log(b)

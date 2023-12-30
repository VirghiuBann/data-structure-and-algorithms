// Shell sort is a generalized version of the insertion sort algorithm. It first sorts elements that are far apart from each other and successively reduces the interval between the elements to be sorted.
// Shell original sequence: N/2, N/4, ..., 1
// a = [33, 31, 40, 8, 12, 17, 25, 42]
// The first loop, n is equal to 8 (size of the array), so the elements are lying at the interval of 4 (n/2=4). Elements will be compared and swapped if they are not in order.
// At the interval 0f 4, the subList are [[33,12],[31,17],[40,25],[8,42]]
// updated array a =[12,17,25,8,33,31,40,42]

// In the second loop, elements are lying at the interval of 2 (n/4=2). Elements will be compared and swapped if they are not in order.
// the sublist will be generated [12,25,33,40], [17,8,31,42]
// updated array a = [12,8,25,17,33,31,40,42]

// In the third loop, elements are lying at the interval 1 (n/8 = 1)
// [[12],[8],[25],[17],[33],[31],[40],[42]]
// [8,12,[25],[17],[33],[31],[40],[42]]
// [8,12,25,[17],[33],[31],[40],[42]]
// [8,12,17,25,[33],[31],[40],[42]]
// [8,12,17,25,33,[31],[40],[42]]
// [8,12,17,25,31,33,[40],[42]]
// [8,12,17,25,31,33,40,[42]]
// [8,12,17,25,31,33,40,42]
//

const shellSort = (arr) => {
  let interval = Math.floor(arr.length / 2)
  while (interval > 0) {
    for (let i = interval; i < arr.length; i++) {
      let temp = arr[i]
      let j = i

      while (j >= interval && arr[j - interval] > temp) {
        arr[j] = arr[j - interval]
        j -= interval
      }
      arr[j] = temp
    }
    interval = Math.floor(interval / 2)
  }
}

const a = [33, 31, 40, 8, 12, 17, 25, 42]
shellSort(a)
console.log(a)

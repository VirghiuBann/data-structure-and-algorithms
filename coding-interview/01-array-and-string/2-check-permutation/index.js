function checkPermutation(str, str1) {
  if (str.length !== str1.length) return false

  return sortString(str) === sortString(str1)

  function sortString(str) {
    return str.split('').sort().join('')
  }
}

console.log(checkPermutation('abc', 'bca'))
console.log(checkPermutation('abc', 'bc'))
console.log(checkPermutation('hello', 'olleh'))
console.log(checkPermutation('1234', '4321'))

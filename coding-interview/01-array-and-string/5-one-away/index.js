// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// Example
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bae -> false

function oneEditAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false
  }

  let shortStr = str1.length > str2.length ? str2 : str1
  let lonStr = str1.length > str2.length ? str1 : str2

  let index1 = 0
  let index2 = 0
  let existDiff = false

  while (index2 < lonStr.length && index1 < shortStr.length) {
    if (shortStr.charAt(index1) != lonStr.charAt(index2)) {
      if (existDiff) {
        return false
      }
      existDiff = true
      if (shortStr.length == lonStr.length) {
        index1++
      }
    } else {
      index1++
    }
    index2++
  }
  return true
}

console.log(oneEditAway('pale', 'ple')) // true
console.log(oneEditAway('pales', 'pale')) // true
console.log(oneEditAway('pale', 'bale')) // true
console.log(oneEditAway('pale', 'bae')) // false

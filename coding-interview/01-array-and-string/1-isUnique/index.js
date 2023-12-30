// using set
function isUniqueChar(str) {
  if (!str) return false

  const uniqueChars = new Set()

  for (let i = 0; i < str.length; i++) {
    const value = str.charAt(i)
    if (uniqueChars.has(value)) {
      return false
    }
    uniqueChars.add(value)
  }
  return true
}

// console.log(isUniqueChar('hello'))
// console.log(isUniqueChar('123'))

function allUniqueChar(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}

console.log(allUniqueChar('hello'))
console.log(allUniqueChar('123'))

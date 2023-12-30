// String Rotation: Assume you have a method isSubstring which checks if one word is substring of another. Given two strings, S1 and S2, write code to check if S2 is a rotation of S1 using only one call to IsSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").

function isRotate(str1, str2) {
  if (str1.length === str2.length) {
    const doubleStr2 = str2.concat(str2)
    return doubleStr2.includes(str1)
  }

  return false
}

const str1 = 'waterbottle'
const str2 = 'erbottlewat'

console.log(isRotate(str1, str2))
console.log(isRotate(str1, str2 + 'tt'))

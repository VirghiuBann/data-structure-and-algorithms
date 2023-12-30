function urlify(str) {
  const cleanString = str.trim()
  // /\s+/g matches one or more spaces
  return cleanString.replace(/\s+/g, '%20')
}

function urlifyTwo(str) {
  const cleanString = str
    .trim()
    .split(' ')
    .filter((val) => val !== '')

  const strUrlify = cleanString.map((val, index) => {
    return cleanString.length - 1 === index ? val : val + '%20'
  })

  return strUrlify.join('')
}

// Input:"Mr John Smith     "
// Output:"Mr%20John%20Smith"

console.log(urlifyTwo('Mr John Smith     '))
console.log(urlifyTwo('  John Smith     '))
console.log(urlifyTwo('Mr   John    Smith'))
console.log(urlifyTwo('Mr John Smith'))

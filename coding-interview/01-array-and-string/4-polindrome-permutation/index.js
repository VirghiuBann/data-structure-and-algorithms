// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input:Tact Coa
// Output:True (permutations: "taco cat'; "atco eta·; etc.)

function solutionOne(str) {
  const formatStr = str.toLowerCase().split(' ').join('')
  const frequencyMap = new Map()

  for (let i = 0; i < formatStr.length; i++) {
    const currentStr = formatStr.charAt(i)
    const freqStr = frequencyMap.get(currentStr) || 0
    frequencyMap.set(currentStr, freqStr + 1)
  }

  let oddCount = 0
  for (const objectFreq of frequencyMap) {
    if (objectFreq[1] % 2 !== 0) {
      oddCount++
    }
    // if oddCount is greater or equal 2 then  we can break the for loop
    if (oddCount >= 2) break
  }

  return oddCount < 2
}

console.log(solutionOne('taco cat'))
console.log(solutionOne('atco cta'))
console.log(solutionOne('taco boa'))

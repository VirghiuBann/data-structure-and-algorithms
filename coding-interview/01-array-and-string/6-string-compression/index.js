// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// Example
//  aabcccccaaa -> a2b1c5a3

function stringCompression(str) {
  let compressedStr = '',
    countStr = 0
  for (let i = 0; i < str.length; i++) {
    countStr++
    if (i + 1 >= str.length || str.charAt(i) != str.charAt(i + 1)) {
      compressedStr = compressedStr.concat(str.charAt(i), countStr)
      countStr = 0
    }
  }
  return compressedStr.length < str.length ? compressedStr : str
}

console.log(stringCompression('aabcccccaaa'))

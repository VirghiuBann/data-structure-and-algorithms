## Solution array and string

1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

1. O(n^2), no additional data structure used.

```js
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
```

2. O(n) Using Set()

```js
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

console.log(isUniqueChar('hello'))
console.log(isUniqueChar('123'))
```

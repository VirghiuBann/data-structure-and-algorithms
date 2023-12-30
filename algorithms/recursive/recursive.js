const printFun = (test) => {
  if (test < 1) return

  console.log(test + ' before ')
  printFun(test - 1)
  console.log(test + ' after')
  return
}

// console.log(printFun(3))
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1
  }
  console.log(`${n} * factorial(${n} - 1)`)
  return n * factorial(n - 1)
}

console.log(factorial(5))

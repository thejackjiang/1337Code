function reverse(input) {
    const isPositive = input > 0 ? true : false
    const absValue = Math.abs(input)
    const stringed = absValue.toString()
    let result = ''
    for (let i = stringed.length - 1; i >= 0; i--) {
      result += stringed[i]
    }
    if (!isPositive) result = `-${result}`
    if (+result > 2147483647 || +result < -2147483648) return 0
    return result
  }
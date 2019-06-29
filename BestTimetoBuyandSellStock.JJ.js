function maxProfit(input) {
  let max = 0
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[j] - input[i] > max) {
        max = input[j] - input[i]
      }
    }
  }
  return max
}

function maxProfitStack(input) {
  const stack = []
  
}

const input = [7, 6, 4, 3, 1]

const results = maxProfit(input)
const results2 = maxProfit2(input)
debugger
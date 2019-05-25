function maxSubArray(input) {
  if (input.length === 1) return input[0]
  let globalMax = -Infinity;
  let localMax = 0;
  for (let i = 0; i < input.length; i++) {
    localMax += input[i]
    if (globalMax < localMax) globalMax = localMax
    if (localMax >= 0) {
      continue
    }
    else localMax = 0
  }
  return globalMax
}

// const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const input = [1]
maxSub(input)

//answer 4,-1,2,1
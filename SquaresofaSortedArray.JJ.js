/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/

function sortedSquares(A) {
  const stack = []
  const results = []
  let i = 0
  while (i < A.length) {
    if (A[i] < 0) {
      stack.push(Math.abs(A[i]))
      i++
    } else if (stack[stack.length - 1] < A[i]) {
      results.push(Math.pow(stack.pop(), 2))
    } else {
      results.push(Math.pow(A[i], 2))
      i++
    }

  }
  while (stack.length > 0) {
    results.push(Math.pow(stack.pop(), 2))
  }
  return results
}

// const input = [-4, -1, 0, 3, 10]
const input = [-1]
const res = sortedSquares(input)
debugger

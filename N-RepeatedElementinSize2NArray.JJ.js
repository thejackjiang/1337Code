/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Input: [1,2,3,3]
Output: 3
*/

function repeatedNTimes(A) {
  const length = A.length
  const N = length/2
  const cache = {}
  for(let i = 0; i < length; i ++){
    const element = A[i]
    if(!cache[element]) cache[element] = 1
    else cache[element] ++

    if(cache[element] === N){
      return element
    }
  }
  return null
}

const input = [1,2,3,3]

const res = repeatedNTimes(input)
debugger

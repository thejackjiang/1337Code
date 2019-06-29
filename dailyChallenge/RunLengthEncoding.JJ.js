const str = 'AAAABBBCCDD'

function decode(str) {
  if(!str.length) return
  let i = 0
  let curr = str[0]
  let results = ''
  let counter = 1

  while (str[i] === str[i+1]) {
    counter++ 
    i++
    curr = str[i]
  }
  const slice = str.slice(counter)
  const nextBatch = decode(slice) || ''
  results += `${counter}${curr}${nextBatch}`

  return results
}
const res = decode(str)
debugger
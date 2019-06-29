function sortArrayByParity(array){
  const even = []
  const odd = []

  for (let i = 0; i < array.length ; i++){
    if(array[i] % 2 === 0) {
      even.push(array[i])
    } else {
      odd.push(array[i])
    }
  }
  return even.concat(odd)
}

sortArrayByParity([1, 2, 3, 4])
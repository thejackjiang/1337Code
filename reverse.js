function reverse(str){
    for(let i = 0; i < str.length/2; i++){
      let temp = str[i]
      str[i] = str[str.length-i-1]
      str[str.length-i-1] = temp
    }
    return str
  }
  
  const str = ['h', 'e', 'l', 'l', 'o']
  
  reverse(str) 
function isPalindrome(int) {
    const str = int.toString()
    for (let i = 0; i < str.length/2; i++) {
      const end = str.length-1-i
      if(str[i] !== str[end]) return false
    }
    return true
  }
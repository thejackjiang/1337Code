// loop though each letter, check if things around it are palindromes
// account for cases where left or right is same as curr, which can also be palindromes

function longestPalindrome(str) {
  let max = ''
  for (let i = 0; i < str.length; i++) {
    let leftPaliMax = '';
    let rightPaliMax = '';
    if (str[i] === str[i - 1]) {
      leftPaliMax = checkPalindrome(str, i - 2, i + 1, `${str[i]}${str[i-1]}`)
    }
    if (str[i] === str[i + 1]) {
      rightPaliMax = checkPalindrome(str, i - 1, i + 2, `${str[i]}${str[i+1]}`)
    }
    const centerPaliMax = checkPalindrome(str, i - 1, i + 1, `${str[i]}`)

    const loopMax = [leftPaliMax, rightPaliMax, centerPaliMax].reduce((max, ele) =>max.length > ele.length ? max : ele)

    if (loopMax.length > max.length) max = loopMax
  }
  return max
}


function checkPalindrome(str, i, j, curr) {
  let max = curr
  while (i !== -1 || j !== str.length) {
    if (str[i] === str[j]) {
      const substring = str.substring(i, j + 1)
      if(substring.length > max.length) max = substring
      i--
      j++
    } else {
      break
    }
  }
  return max
}

// longestPalindrome('babab')
longestPalindrome('cbbd')
// longestPalindrome('babaab')


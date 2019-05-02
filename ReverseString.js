/*
https://leetcode.com/problems/reverse-string/
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
*/
function reverse(str){
    for(let i = 0; i < str.length/2; i++){
      let temp = str[i]
      str[i] = str[str.length-i-1]
      str[str.length-i-1] = temp
    }
    return str
  }
  
reverse(['h','e'])
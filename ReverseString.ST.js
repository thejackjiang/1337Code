/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

 */

function reverseString(s) {
    const idxPointer = 0;
    while (idxPointer < s.length - idxPointer) {
        const tempVal = s[idxPointer];
        s[idxPointer] = s[(s.length-1) - idxPointer];
        s[(s.length-1) - idxPointer] = tempVal;
    }
    return s;
}

/**
 * Runtime: 144 ms, faster than 43.92% of JavaScript online submissions for Reverse String.
 * Memory Usage: 46.8 MB, less than 70.75% of JavaScript online submissions for Reverse String.
 */
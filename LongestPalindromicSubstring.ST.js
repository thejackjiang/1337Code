/*
 Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"

*/


/*
naive solution:

I could walk through the array
for each index, I can look left and right to determine and walk outward until it isn't a palindrome
record the length and the string, 
if I find another palindrome that is longer, return that total and string
n * n

possible edge cases: the 'middle' of the palindrome doesn't exist, this only exists for 'mirror' palindromes. 
solution: add the next index into the middle to better make a palindrome since we're only really concerned with the edges. Record the index so that we don't loop over extra cases.

is there any caching that I could do? Not that I see....
*/

function longestSubPalindrome (s) {
    let palindrome = '';
    let maxPalindrome = '';
    for (let i = 0; i < s.length; i++) {
        palindrome += s[i];
        let startIndex = i;
        let endIndex = i;

        // determine Middle
        while(i+1 < s.length && s[i+1] === s[i]) {
            i++;
            palindrome += s[i];
            endIndex = i;
        }

        // add to edges
        while((startIndex-1 >= 0 && endIndex+1 < s.length) && (s[startIndex-1] === s[endIndex+1])) {
            palindrome = s[startIndex-1] + palindrome + s[endIndex+1];

            startIndex--;
            endIndex++;
        }

        if (palindrome.length > maxPalindrome.length) {
            maxPalindrome = palindrome;
        }
        palindrome = '';
    }
    return maxPalindrome;
}

longestSubPalindrome('cbbd')

/*
Runtime: 140 ms, faster than 52.26% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 44.4 MB, less than 19.54% of JavaScript online submissions for Longest Palindromic Substring.
*/

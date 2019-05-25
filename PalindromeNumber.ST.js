/*

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:

Coud you solve it without converting the integer to a string?
*/

// Naive -> convert to string then reverse() and check for equality.
// with javascript code
function isPalindrome (num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

// check for if it's negative (<0)
// check if single digit
// Otherwise check front number (divide by 10 until single digit) and single digit
// single digit by mod 10

// check the value, if true, we can subtract the front number * divisor and divide by 10 floor
// assuming int.
// runtime:
// decideLeftDigit is O(n) where n refers to the num of digits num has
// recursive call removeLeftAndSingles O(n) where n refers to num of times you can peel out the outer layer of the num. 121 -> 1 time, 1221 -> 2 times, etc.
// this doesn't work for numbers with 00s unfortunately. I have to figure out whats the best way to deal with 0s.

function isPalindromeInt(num) {
    if (num < 0) return false;
    else if (num < 10) return true;
    else {
        const { 
            divisor, 
            leftDigit 
        } = decideLeftDigit(num);
        const singlesDigit = num % 10;
        if (leftDigit === singlesDigit) {
            const subNum = removeLeftAndSingles(num, leftDigit*divisor)
            return isPalindromeInt(subNum)
        } else {
            return false;
        }
    }
}

function decideLeftDigit(num, divisor = 10) {
    if (num / divisor > 10) {
        divisor *= 10;
        return decideLeftDigit(num, divisor);
    } else {
        return {
            divisor,
            leftDigit: Math.floor(num/divisor)
        }
    }
}

function removeLeftAndSingles(num, left) {
    return Math.floor((num - left)/10);
}

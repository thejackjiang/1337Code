/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/* 
this is the optimal solution as the book describes 
be careful of where you reassign maxTotal. Initially I did it on the reset, which is wrong
*/

function maxSubArray (nums) {
    let maxTotal = -Infinity;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]

        if (maxTotal < total) maxTotal = total;
        if (total < 0) total = 0;
    }
    return maxTotal;
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

/*
Runtime: 64 ms, faster than 89.71% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 35.2 MB, less than 57.95% of JavaScript online submissions for Maximum Subarray.
*

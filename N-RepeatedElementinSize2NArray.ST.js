/*

In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

 

Example 1:

Input: [1,2,3,3]
Output: 3

Example 2:

Input: [2,1,2,5,3,2]
Output: 2

Example 3:

Input: [5,1,5,2,5,3,5,4]
Output: 5

*/

function nRepeated(arr) {
    let cache = {};
    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            cache[arr[i]] = 1
        } else {
            cache[arr[i]]++
            if (cache[arr[i]] === arr.length/2) return arr[i];
        }
    }
}

nRepeated([5,1,5,2,5,3,5,4])

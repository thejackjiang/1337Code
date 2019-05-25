/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

// Naive: O(n^2) double for loop check every sum added to another
function naive(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]+nums[j] === target) return[nums[i],nums[j]]
        }
    }
    return [];
}

// can we do this smarter?
// what if we use a cache? Do we need to loop twice?
// Having to check for 0 case tripped me up a little bit.

function twoSum(nums, target) {
    let cache = {};
    for (let i = 0; i < nums.length; i++) {
        // cache that shit
        if (typeof cache[nums[i]] === 'number') {
            return [i, cache[nums[i]]];    
        } else {
            cache[target-nums[i]] = i;
        }
    }
    return [];
}

twoSum([2,7,11,15], 9)

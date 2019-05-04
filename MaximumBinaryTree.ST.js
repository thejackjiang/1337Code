/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
*/

function constructMaximumBinaryTree(nums) {
    if (nums.length === 0) return null;
    else if (nums.length === 1) {
        return new TreeNode(nums[0], null, null);
    } else {
        const maxIndex = locateMaxIndex(nums);
        const leftSubArray = nums.slice(0, maxIndex);
        const rightSubArray = nums.slice(maxIndex + 1);
        return new TreeNode(
            nums[maxIndex], 
            constructMaximumBinaryTree(leftSubArray), 
            constructMaximumBinaryTree(rightSubArray)
        );
    }
};

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

function locateMaxIndex(array){
    let maxIndex = 0;
    for(let i = 1; i < array.length; i++) {
        if (array[i] > array[maxIndex]) maxIndex = i; 
    }
    return maxIndex;
}

/**
 * Runtime: 100 ms, faster than 99.10% of JavaScript online submissions for Maximum Binary Tree.
 * Memory Usage: 41.8 MB, less than 18.00% of JavaScript online submissions for Maximum Binary Tree.
 */

/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.
*/
function constructMaximumBinaryTree(array) {
    if(!array.length || !array) return null
    const maxIndex = findMaxIndex(array)
  
    const leftHalfSorted = array.slice(0, maxIndex)
    const rightHalfSorted = array.slice(maxIndex + 1, array.length)
  
    const root = new TreeNode(array[maxIndex])
    root.left = constructMaximumBinaryTree(leftHalfSorted)
    root.right = constructMaximumBinaryTree(rightHalfSorted)
    return root
  }
  
  function findMaxIndex(array) {
    let index = 0
    array.forEach((ele, i) => {
      if (ele > array[index]) index = i
    })
    return index
  }
  
  function sortOrder(a, b) {
    return a < b
  }
  
  
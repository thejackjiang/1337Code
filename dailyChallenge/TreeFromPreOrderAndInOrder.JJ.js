//   a
//  / \
//  b   c
// / \ / \
// d  e f  g

const preorder = [a, b, d, e, c, f, g]
const inorder = [d, b, e, a, f, c, g]

let seenPreorder = {}

function tree(preorder, inorder) {
  for (let i = 0; i < inorder.length; i++) {
    const node = inorder[i]
    const pIndex = findPreOrder(seenPreorder, node)
    traverseBackwardsFrom(pIndex, preorder)
  }
}

function findPreOrder(seenPreorder, node) {
  const nodeVal = node.val
  let pIndex
  for (let p = 0; p < preorder.length; p++) {
    if (seenPreorder[nodeVal]) {
      pIndex = seenPreorder[nodeVal]
      break
    } else if (preorder[p] === nodeVal) {
      seenPreorder[nodeVal] = p
      pIndex = p
    }
  }
  return pIndex
}

function traverseBackwardsFrom(pIndex, preorder) {
  for(let i = pIndex; i > 0; i --){
    const node = preorder[i]
    const nodeVal = node.val
    if(seenPreorder[nodeVal]){ // seen
      // create tree
    } else {
      
    }
  }
}
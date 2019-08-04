function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function mergeTrees(t1, t2) {
  if(!t1 && !t2) { 
    return null
  }
  const nodeSum = sum(t1, t2)
  const newNode = new TreeNode(nodeSum)
  if (t1 && t1.left || t2 && t2.left) {
    const left = mergeTrees(t1.left || {}, t2.left || {})
    newNode.left = left
  }
  if (t1 && t1.right || t2 && t2.right) {
    const right = mergeTrees(t1.right || {}, t2.right || {})
    newNode.right = right
  }
  return newNode
}
function sum(t1, t2) {
  if (t1 && Number.isInteger(t1.val) && t2 && Number.isInteger(t2.val)) {
    return t1.val + t2.val
  } else if (t1 && Number.isInteger(t1.val)) {
    return t1.val
  } else if (t2 && Number.isInteger(t2.val)) {
    return t2.val
  } else {
    return null
  }
}

const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(4)

const e = new TreeNode(5)
const f = new TreeNode(6)
const g = new TreeNode(7)
const h = new TreeNode(8)
const i = new TreeNode(9)


a.left = b
a.right = c
b.left = d

e.left = f
e.right = g
f.right = h
h.left = i

const newTree = mergeTwoBinaryTrees(a, e)
debugger

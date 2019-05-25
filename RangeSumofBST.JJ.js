function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function rangeSumBST(root, L, R) {
  console.log(root)
  let sum = 0
  if (root && root.val >= L && root.val <= R) sum += root.val

  if (root && root.left) sum += rangeSumBST(root.left, L, R)
  if (root && root.right) sum += rangeSumBST(root.right, L, R)
  return sum
}

const a = new TreeNode(10)
const b = new TreeNode(5)
const c = new TreeNode(15)
const d = new TreeNode(3)
const e = new TreeNode(7)
const f = new TreeNode(13)
const g = new TreeNode(18)
const h = new TreeNode(1)
const i = new TreeNode(null)
const j = new TreeNode(6)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
d.left = h
d.rigt = i
e.left = j

const res = rangeSumBST(a, 7, 15)
debugger

/**
 * Definition for a binary tree node.
 *  * function TreeNode(val) {
 *   *     this.val = val;
 *    *     this.left = this.right = null;
 *     * }
 *      */
/**
 *  * @param {TreeNode} t1
 *   * @param {TreeNode} t2
 *    * @return {TreeNode}
 *     */
var mergeTrees = function(t1, t2) {
	let myTree = new TreeNode(null)
	if (!t1 && !t2) return null;
	recurse(t1, t2, myTree)
	return myTree;
};

function recurse(btreeA, btreeB, myTree) {
	if (!btreeA) btreeA = new TreeNode(null);
	if (!btreeB) btreeB = new TreeNode(null);

	if (btreeA.val) myTree.val += btreeA.val;
	if (btreeB.val) myTree.val += btreeB.val;

	if (btreeA.left || btreeB.left) {
		myTree.left = new TreeNode(0)
		recurse(btreeA.left, btreeB.left, myTree.left);
	}

	if (btreeA.right || btreeB.right) {
		myTree.right = new TreeNode(0);
		recurse(btreeA.right, btreeB.right, myTree.right);
	}
}

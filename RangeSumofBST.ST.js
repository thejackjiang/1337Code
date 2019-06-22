function recurseBST(root, L, R) {
    let sum = 0;
    if (root.value >= L && root.value <= R) sum += root.value;
    if (root.left)  sum += recurseBST(root.left, L, R);
    if (root.right) sum += recurseBST(root.right, L, R);
    return sum;
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // 递归解法：
    if (!preorder.length || !inorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
}; 
//    1
// 2     3
//4  5 6  7

//preorder = [1,2,4,5,3,6,7], inorder = [4,2,5,1,6,3,7]

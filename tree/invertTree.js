/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // 翻转二叉树
    if (!root) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

var invertTree = function (root) {
    // 迭代解法
    if (!root) return null;
    const queue = [root];
    while (queue.length) {
        const cur = queue.shift();
        const left = cur.left;
        cur.left = cur.right;
        cur.right = left;
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }
    return root;
}

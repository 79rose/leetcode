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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const res = [];
    const midlleOrder = (node) => {
        if (!node) return;
        midlleOrder(node.left);
        res.push(node.val);
        midlleOrder(node.right);
    };
    midlleOrder(root);
    return res;
};
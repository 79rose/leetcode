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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    // step1. 将左子树插入到右子树的地方
    // step2. 将原来的右子树接到左子树的最右边节点
    // step3. 考虑新的右子树的根节点，重复步骤1、2
    while (root) {
        if (root.left) {
            let pre = root.left;
            while (pre.right) {
                pre = pre.right;
            }
            pre.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }
};
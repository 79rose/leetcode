/**
 * Definition for a binary tree node.
 
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    // 深度优先搜索
    if (!root) return 0;
    const dfs = (root, targetSum) => {
        if (!root) return 0;
        let res = 0;
        if (root.val === targetSum) {
            res++;
        }
        res += dfs(root.left, targetSum - root.val);
        res += dfs(root.right, targetSum - root.val);
        return res;
    }
    return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};
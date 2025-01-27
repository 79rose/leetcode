/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // hash
    const parent = new Map();

    const dfs = (root) => {
        if (!root) return;
        if (root.left) {
            parent.set(root.left.val, root);
            dfs(root.left);
        }
        if (root.right) {
            parent.set(root.right.val, root);
            dfs(root.right);
        }
    }
    dfs(root);

    const ancestors = new Set();
    while (p) {
        ancestors.add(p.val);
        p = parent.get(p.val);
    }

    while (q) {
        if (ancestors.has(q.val)) return q;
        q = parent.get(q.val);
    }
    return null;
};
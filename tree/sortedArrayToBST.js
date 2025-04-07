/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
};

var sortedArrayToBST = function (nums) {
    // 迭代解法
    if (!nums.length) return null;
    const root = new TreeNode();
    const stack = [[root, 0, nums.length - 1]];
    while (stack.length) {
        const [node, left, right] = stack.pop();
        const mid = left + Math.floor((right - left) / 2);
        node.val = nums[mid];
        if (left <= mid - 1) {
            node.left = new TreeNode();
            stack.push([node.left, left, mid - 1]);
        }
        if (mid + 1 <= right) {
            node.right = new TreeNode();
            stack.push([node.right, mid + 1, right]);
        }
    }
    return root;
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const res = [];
    const len = nums.length;
    let suf = new Array(nums.length);
    let pre = new Array(nums.length);
    pre[0] = 1;
    suf[len - 1] = 1;

    for (let i = 1; i < len; i++) {
        pre[i] = pre[i - 1] * nums[i - 1];
    }

    for (let i = len - 2; i >= 0; i--) {
        suf[i] = suf[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < len; i++) {
        res.push(pre[i] * suf[i]);
    }

    return res;
};
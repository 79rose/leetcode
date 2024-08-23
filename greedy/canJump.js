/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let pre_sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (pre_sum < nums[i]) return false;
        pre_sum = Math.max(pre_sum, nums[i]);
    }
    return true;
}
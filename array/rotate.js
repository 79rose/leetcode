/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let newNums = new Array(nums.length).fill(0);
    for (let i = 0; i < k; i++) {
        newNums[i] = nums[nums.length - k + i];
    }
    for (let i = k; i < nums.length; i++) {
        newNums[i] = nums[i - k];
    }
    nums = newNums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
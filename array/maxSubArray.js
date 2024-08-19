/**
 * @leetcode 53. 最大子数组和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // function1: dp·
    // 1. dp[i]表示以nums[i]结尾的最大子数组和
    // 2. dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
    // const dp = [nums[0]];
    // let max = nums[0];
    // nums.forEach((num, index) => {
    //     if (index === 0) return;
    //     dp[index] = Math.max(dp[index - 1] + num, num);
    //     max = Math.max(max, dp[index]);
    // });
    // return max;

    // function2: 分治

    const crossSumFunc = (nums, left, right, mid) => {
        if (left === right) {
            return nums[left];
        }
        let leftSubSum = -Infinity;
        let currSum = 0;
        for (let i = mid; i > left - 1; i--) {
            currSum += nums[i];
            leftSubSum = Math.max(leftSubSum, currSum);
        }
        let rightSubSum = -Infinity;
        currSum = 0;
        for (let i = mid + 1; i < right + 1; i++) {
            currSum += nums[i];
            rightSubSum = Math.max(rightSubSum, currSum);
        }
        return leftSubSum + rightSubSum;
    }
    const maxSubArray = (nums, left, right) => {
        if (left === right) {
            return nums[left];
        }
        const mid = Math.floor((left + right) / 2); //向下取整
        const leftSum = maxSubArray(nums, left, mid);
        const rightSum = maxSubArray(nums, mid + 1, right);
        const crossSum = crossSumFunc(nums, left, right, mid);
        return Math.max(leftSum, rightSum, crossSum);
    }
    return maxSubArray(nums, 0, nums.length - 1);

};
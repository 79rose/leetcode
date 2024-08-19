/**
 * @leetcode 239. 滑动窗口最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // const res = [];
    // const initWindow = nums.slice(0, k);
    // let max = Math.max(...initWindow);
    // res.push(max);
    // for (let i = k; i < nums.length; i++) {
    //     initWindow.push(nums[i]);
    //     if (nums[i] >= max) {
    //         max = nums[i];
    //     } else if (initWindow[0] === max) {
    //         max = Math.max(...initWindow.slice(1));
    //     }
    //     initWindow.shift();
    //     res.push(max);
    // }
    // return res;
    const res = [];
    const deque = [];

    for (let i = 0; i < nums.length; i++) {
        // 保证deque[0]是最大值
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        //  添加当前值
        deque.push(i);

        // 保证deque[0]在窗口内
        if (deque[0] <= i - k) {
            deque.shift();
        }

        // 添加最大值
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
};
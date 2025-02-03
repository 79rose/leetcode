/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // func1. 哈希表 + 桶排序
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const bucket = new Array(nums.length + 1).fill(0).map(() => []);
    for (const [num, count] of map.entries()) {
        bucket[count].push(num);
    }
    const res = [];
    for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
        res.push(...bucket[i]);
    }
    return res;
};
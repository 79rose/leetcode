/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const hash = new Set();
    let min;
    let max;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            hash.add(nums[i]);
    }
    hash.forEach((val) => {
        if (min === undefined) {
            min = val;
        }
        if (max === undefined) {
            max = val;
        }
        if (val < min) {
            min = val;
        }
        if (val > max) {
            max = val;
        }
    });
    if (min === undefined) {
        return 1;
    }
    if (min > 1) {
        return 1;
    }
    for (let i = min; i <= max; i++) {
        if (!hash.has(i)) {
            return i;
        }
    }

    return max + 1;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b);
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) return res;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                right--;
                left++;
            } else if (sum < 0) left++;
            else right--;
        }
    }
    return res;
};
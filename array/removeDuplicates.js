/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length; // 如果数组长度小于等于2，直接返回长度

    let idx = 2; // 从第三个元素开始检查
    for (let i = 2; i < nums.length; i++) {
        // 如果当前元素与前两个元素不相同，则保留
        if (nums[i] !== nums[idx - 2]) {
            nums[idx++] = nums[i];
        }
    }
    return idx; // 返回新数组的长度
};
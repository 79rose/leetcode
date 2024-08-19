/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 两数之和 
    let index1, index2;
    // 1. 暴力解法
    // 2. 哈希表
    // 思路：遍历数组，将数组元素存入哈希表，同时判断 target - nums[i] 是否在哈希表中
    // 哈希表是一种以键值对形式存储数据的结构，可以快速查找到指定键对应的值
    // 在这里，我们可以将数组元素作为键，数组下标作为值存入哈希表
    // 如果 target - nums[i] 在哈希表中，说明找到了两个数，返回它们的下标
    // let map = new Map();
    // nums.forEach((num, index) => {
    //     if (map.has(target - num)) {
    //         index1 = map.get(target - num);
    //         index2 = index;
    //     } else {
    //         map.set(num, index);
    //     }
    // }
    // );
    // return [index1, index2];
    // 3. 排序 + 双指针
    // 思路：先对数组进行排序，然后使用双指针，一个指向数组的头部，一个指向数组的尾部
    // 如果两个指针指向的元素之和小于 target，说明左指针需要右移，使得两个元素之和增大
    // 如果两个指针指向的元素之和大于 target，说明右指针需要左移，使得两个元素之和减小
    // 如果两个指针指向的元素之和等于 target，说明找到了两个数，返回它们的下标
    let sortedNums = nums.slice().sort((a, b) => a - b);
    let left = 0, right = sortedNums.length - 1;
    while (left < right) {
        if (sortedNums[left] + sortedNums[right] < target) {
            left++;
        } else if (sortedNums[left] + sortedNums[right] > target) {
            right--;
        } else {
            index1 = nums.indexOf(sortedNums[left]);
            index2 = nums.lastIndexOf(sortedNums[right]);
            break;
        }
    }
    return [index1, index2];
};
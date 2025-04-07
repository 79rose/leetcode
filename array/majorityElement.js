/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const numsMap = {}
    let max = 0;
    let num = 0;
    nums.forEach(item => {
        if (numsMap[item] === undefined) {
            numsMap[item] = 1;
        }
        numsMap[item] += 1;
        if (numsMap[item] > max) {
            max = numsMap[item]
            num = item
        }
    })
    return num;
};

// function2 直接排序，取中间值
// var majorityElement = function (nums) {
//     nums.sort((a, b) => a - b);
//     return nums[Math.floor(nums.length / 2)];
// };
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//     let lt = 0;
//     let rt = nums.length - 1;
//     let insert = -1;
//     while (lt < rt) {
//         if (target > nums[lt]) lt++;
//         else if (target < nums[rt]) rt--;
//         if (target === nums[lt]) insert = lt;
//         if (target === nums[rt]) insert = rt;
//     }
//     if (insert === -1) {
//         if (nums[nums.length - 1] < target)
//             insert = nums.length;
//         else
//             insert = rt
//     };

//     return insert;
// };
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let lt = 0;
    let rt = nums.length - 1;
    while (lt <= rt) {
        const mid = Math.floor((lt + rt) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return lt;
};
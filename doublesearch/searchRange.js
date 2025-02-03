/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    let leftIndex = -1;
    let rightIndex = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            leftIndex = mid;
            rightIndex = mid;
            while (nums[rightIndex + 1] === target) {
                rightIndex++;
            }
            while (nums[leftIndex - 1] === target) {
                leftIndex--;
            }
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [leftIndex, rightIndex];
};
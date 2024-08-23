/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // func 1： 快速排序
    const fastSort = (arr) => {
        if (arr.length <= 1) return arr;
        const pivot = arr[0];
        const left = [];
        const right = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return fastSort(right).concat(pivot, fastSort(left));
    };
    const sorted = fastSort(nums);
    return sorted[k - 1];

}
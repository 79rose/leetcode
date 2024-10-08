/**
 * @description 快速排序
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

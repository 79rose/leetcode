/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let lt = 0;
    const n = matrix.length;
    const m = matrix[0].length;
    let rt = matrix[0].length - 1;
    let flag = false;
    while (
        lt < n && rt >= 0
    ) {
        if (matrix[lt][rt] < target) {
            lt++;
        }
        else if (matrix[lt][rt] > target) {
            rt--;
        } else {
            flag = true;
            break;
        }
    }

    return flag;
};
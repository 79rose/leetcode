/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let height = 0;
    let width = cols - 1;
    while (height < rows && width >= 0) {
        if (matrix[height][width] === target) {
            return true;
        } else if (matrix[height][width] < target) {
            height++;
        } else {
            width--;
        }
    }
    return false;
};
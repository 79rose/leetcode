/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    const result = [];
    if (matrix.length === 0) return result;

    // 思路：模拟螺旋遍历
    // 1. 定义四个边界，top, bottom, left, right
    // 2. 从左到右，从上到下，从右到左，从下到上遍历
    // 3. 注意边界条件： top <= bottom, left <= right
    // 4. 遍历结束条件： top > bottom || left > right
    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};

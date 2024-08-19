/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const yList = new Array(matrix.length).fill(false);
    const xList = new Array(matrix[0].length).fill(false);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                yList[i] = true;
                xList[j] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (yList[i] || xList[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};


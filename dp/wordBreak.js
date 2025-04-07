/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};


/**
 * 计算二维矩阵中从左上角到右下角的最短路径
 * @param {number[][]} grid - 二维矩阵，0表示障碍物，非0表示可通过
 * @return {number} - 最短路径长度，如果不存在则返回-1
 */
function shortestPath(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return -1;
    }

    const rows = grid.length;
    const cols = grid[0].length;

    // 如果起点或终点是障碍物，直接返回-1
    if (grid[0][0] === 0 || grid[rows - 1][cols - 1] === 0) {
        return -1;
    }

    // 只能向右或向下移动
    const directions = [[0, 1], [1, 0]];

    // 使用队列进行BFS
    const queue = [[0, 0]];

    // 记录到达每个格子的最短距离
    const distances = Array(rows).fill().map(() => Array(cols).fill(Infinity));
    distances[0][0] = 1;  // 起点距离为1（包括起点自身）

    while (queue.length > 0) {
        const [row, col] = queue.shift();

        // 如果到达终点，返回距离
        if (row === rows - 1 && col === cols - 1) {
            return distances[row][col];
        }

        // 探索两个方向：向右和向下
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // 检查新位置是否在网格内且不是障碍物且未访问过
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                grid[newRow][newCol] !== 0 &&
                distances[newRow][newCol] === Infinity
            ) {
                distances[newRow][newCol] = distances[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    // 如果无法到达终点
    return -1;
}

// 测试例子
const grid1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
console.log(shortestPath(grid1));  // 输出: 5

const grid2 = [
    [1, 0, 1],
    [0, 0, 1],
    [1, 1, 1]
];
console.log(shortestPath(grid2));  // 输出: -1
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    // 完全平方数
    // 动态规划

    const dp = new Array(n + 1).fill(Infinity); // dp[i] 表示 i 的完全平方数的最小数量
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};


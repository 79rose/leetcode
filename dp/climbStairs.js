/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n;
    // let pre = 1;
    // let cur = 2;
    const dp = [1, 2];
    for (let i = 3; i <= n; i++) {
        // let temp = cur;
        // cur += pre;
        // pre = temp;
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    // return cur;
    return dp[n - 1];
    // if (n <= 0) return 0;
    // if (n <= 2) return n;
    // return climbStairs(n - 1) + climbStairs(n - 2);
};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let pre_min = prices[0];
    let max_profit = 0;

    for (let i = 1; i < prices.length; i++) {
        max_profit = Math.max(max_profit, prices[i] - pre_min);
        pre_min = Math.min(pre_min, prices[i]);
    }

    return max_profit;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];

    const dfs = (path) => {
        if (path.length === nums.length) {
            res.push(path.slice());
            return;
        }

        for (let num of nums) {
            if (path.includes(num)) {
                continue;
            }
            path.push(num);
            dfs(path);
            path.pop();
        }
    };
    dfs([]);
    return res;
};
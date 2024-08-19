/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // const map = new Map();
    // let max = 0;
    // for (let i of nums) {
    //     if (!map.has(i)) {
    //         const prelen = map.get(i - 1) ?? 0;
    //         const nextlen = map.get(i + 1) ?? 0;
    //         const curlen = 1 + prelen + nextlen;
    //         map.set(i, curlen);
    //         max = Math.max(max, curlen);
    //         map.set(i - prelen, curlen);
    //         map.set(i + nextlen, curlen)
    //     }
    // }
    // return max;

    const set = new Set(nums);

    let max = 0;
    for (let i of set) {
        if (!set.has(i - 1)) {
            let cur = i;
            let curMax = 1;
            while (set.has(cur + 1)) {
                cur++;
                curMax++;
            }
            max = Math.max(max, curMax);
        }
    }
    return max;
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let max = 0;
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            max = Math.max(max, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    return max;
    // const res = [];
    // let max = 0;
    // for (let i of s) {
    //     while (res.includes(i)) {
    //         res.shift()
    //     }
    //     res.push(i)
    //     max = Math.max(max, res.length)
    // }
    // return max;

};
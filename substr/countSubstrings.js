/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // 中心扩散法
    let ans = 0;
    for (let center = 0; center < 2 * s.length - 1; center++) {
        let left = Math.floor(center / 2);
        let right = left + center % 2;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            ans++;
            left--;
            right++;
        }
    }
    return ans;
};


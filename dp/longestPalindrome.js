/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // 中心扩散法
    let maxStr = '';
    for (let center = 0; center < 2 * s.length - 1; center++) {
        let left = Math.floor(center / 2);
        let right = left + center % 2;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxStr.length) {
                maxStr = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
    }
    return maxStr;
};


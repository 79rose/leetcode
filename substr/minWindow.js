/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// var getStrMap = function (s) {
//     const map = new Map();
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             map.set(s[i], map.get(s[i]) + 1);
//         } else {
//             map.set(s[i], 1);
//         }
//     }
//     return map;
// };
// var minWindow = function (s, t) {
//     let lt = 0;
//     let rt = t.length;
//     let res = "";
//     const tmp = getStrMap(t);
//     const isContains = function (str) {
//         const map = new Map(tmp);
//         for (let i = 0; i < str.length; i++) {
//             if (map.has(str[i])) {
//                 if (map.get(str[i]) === 1) {
//                     map.delete(str[i]);
//                 } else {
//                     map.set(str[i], map.get(str[i]) - 1);
//                 }
//             }
//         }
//         return map.size === 0;
//     }
//     while (rt <= s.length) {
//         const temp = s.slice(lt, rt);
//         if (isContains(temp)) {
//             if (res === "" || temp.length < res.length) {
//                 res = temp;
//             }
//             lt++;
//         } else {
//             rt++;
//         }
//     }

//     return res;
// };

var minWindow = (s, t) => {
    let minLen = s.length + 1;
    let start = s.length;     // 结果子串的起始位置
    let map = {};             // 存储目标字符和对应的缺失个数
    let missingType = 0;      // 当前缺失的字符种类数
    for (const c of t) {      // t为baac的话，map为{a:2,b:1,c:1}
        if (!map[c]) {
            missingType++;        // 需要找齐的种类数 +1
            map[c] = 1;
        } else {
            map[c]++;
        }
    }
    let l = 0, r = 0;                // 左右指针
    for (; r < s.length; r++) {      // 主旋律扩张窗口，超出s串就结束
        let rightChar = s[r];          // 获取right指向的新字符
        if (map[rightChar] !== undefined) map[rightChar]--; // 是目标字符，它的缺失个数-1
        if (map[rightChar] == 0) missingType--;   // 它的缺失个数新变为0，缺失的种类数就-1
        while (missingType == 0) {                // 当前窗口包含所有字符的前提下，尽量收缩窗口
            if (r - l + 1 < minLen) {    // 窗口宽度如果比minLen小，就更新minLen
                minLen = r - l + 1;
                start = l;                 // 更新最小窗口的起点
            }
            let leftChar = s[l];          // 左指针要右移，左指针指向的字符要被丢弃
            if (map[leftChar] !== undefined) map[leftChar]++; // 被舍弃的是目标字符，缺失个数+1
            if (map[leftChar] > 0) missigType++;      // 如果缺失个数新变为>0，缺失的种类+1
            l++;  // 左指针要右移 收缩窗口
        }
    }
    if (start == s.length) return "";
    return s.substring(start, start + minLen); // 根据起点和minLen截取子串
};


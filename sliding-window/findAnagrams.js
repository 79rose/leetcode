// 438. 找到字符串中所有字母异位词
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    // 维护一个滑动窗口 [left, right]，窗口大小为 p.length
    const ans = [];
    if (s.length < p.length) return ans;

    const aCodeIdx = 'a'.charCodeAt();
    const pList = Array(26).fill(0);
    const sList = Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        pList[p.charCodeAt(i) - aCodeIdx]++;
        sList[s.charCodeAt(i) - aCodeIdx]++;
    }
    const pListStr = pList.toString();
    let sListStr = sList.toString();
    if (pListStr === sListStr) ans.push(0);

    for (let i = 0; i < s.length - p.length; i++) {
        --sList[s.charCodeAt(i) - aCodeIdx];
        ++sList[s.charCodeAt(i + p.length) - aCodeIdx];
        sListStr = sList.toString();
        if (pListStr === sListStr) ans.push(i + 1);
    }

    return ans;
}; 
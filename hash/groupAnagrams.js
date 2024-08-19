/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // 1.建立哈希
    // 2.遍历数组，对每个字符串进行排序，将排序后的字符串作为键，原字符串作为值存入哈希表
    // 3.返回哈希表的值
    let map = new Map();
    strs.forEach(
        (item) => {
            const key = [...item.slice()].sort().join('');
            const list = map.get(key) ?? [];
            list.push(item);
            map.set(key, list)
        }
    )
    const result = [...map.values()];
    return result;

};

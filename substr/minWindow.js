/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var getStrMap = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    return map;
};
var minWindow = function (s, t) {
    let lt = 0;
    let rt = t.length;
    let res = "";
    const tmp = getStrMap(t);
    const isContains = function (str) {
        const map = new Map(tmp);
        for (let i = 0; i < str.length; i++) {
            if (map.has(str[i])) {
                if (map.get(str[i]) === 1) {
                    map.delete(str[i]);
                } else {
                    map.set(str[i], map.get(str[i]) - 1);
                }
            }
        }
        return map.size === 0;
    }
    while (rt <= s.length) {
        const temp = s.slice(lt, rt);
        if (isContains(temp)) {
            if (res === "" || temp.length < res.length) {
                res = temp;
            }
            lt++;
        } else {
            rt++;
        }
    }

    return res;
};
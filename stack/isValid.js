/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    let flag = true;
    [...s].forEach(char => {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (!stack.length) {
                flag = false;
                return;
            }
            const top = stack.pop();
            if (top === '(' && char !== ')') {
                flag = false;
            } else if (top === '[' && char !== ']') {
                flag = false;
            } else if (top === '{' && char !== '}') {
                flag = false;
            }
        }
    });

    return flag && !stack.length;
};
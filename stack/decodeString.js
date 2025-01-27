/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const numStack = [];
    const strStack = [];
    let num = 0;
    let result = '';
    for (const char of s) {
        if (!isNaN(char)) {
            num = num * 10 + Number(char);
        } else if (char === '[') {
            numStack.push(num);
            strStack.push(result);
            num = 0;
            result = '';
        } else if (char === ']') {
            const repeatTimes = numStack.pop();
            result = strStack.pop() + result.repeat(repeatTimes);
        } else {
            result += char;
        }
        console.log('numStack:', numStack, 'strStack:', strStack, 'num:', num, 'result:', result, 'char:', char);
    }
    return result;
};
// s = "3[a2[c]]"
const s = "3[a2[c]]";
decodeString(s);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function (nums, k) {
//     // 前缀和
//     const sum = [0];
//     nums.forEach((num, index) => {
//         sum[index + 1] = sum[index] + num;
//     });
//     let count = 0;
//     for (let i = 0; i < sum.length; i++) {
//         for (let j = i + 1; j < sum.length; j++) {
//             if (sum[j] - sum[i] === k) {
//                 count++;
//             }
//         }
//     }

//     return count;

// };

var subarraySum = function (nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            count += mp.get(pre - k);
        }
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
};
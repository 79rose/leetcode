/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//     let left = 0;
//     let right = 0;
//     let len = height.length;
//     let area = 0;
//     while (right < len) {
//         //case 1 右边能找到比left标记高的
//         //case 2 右边找不到比left标记高的  找到右边最高的
//         while (right < len && height[right] < height[left]) {
//             right++;
//         }
//         if (right < len) {
//             area += (right - left) * height[left];
//             area -= height.slice(left, right).reduce((a, b) => a + b, 0);
//             left = right;
//             right++;
//         } else {
//             let maxRight = left + 1;
//             for (let i = left + 1; i < len; i++) {
//                 if (height[i] > height[maxRight]) {
//                     maxRight = i;
//                 }
//             }
//             if (maxRight < len) {
//                 let minHeight = Math.min(height[left], height[maxRight]);
//                 for (let i = left + 1; i < maxRight; i++) {
//                     area += minHeight - height[i];
//                 }
//                 left = maxRight;
//                 right = left + 1;
//             } else {
//                 break;
//             }
//         }
//     }
//     return area;
// };

var trap = function (height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let area = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                area += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                area += rightMax - height[right];
            }
            right--;
        }
    }

    return area;
};
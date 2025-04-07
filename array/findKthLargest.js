// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//     // func 1： 快速排序 
//     const fastSort = (arr) => {
//         if (arr.length <= 1) return arr;
//         const pivot = arr[0];
//         const left = [];
//         const right = [];
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] < pivot) {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         }
//         return fastSort(right).concat(pivot, fastSort(left));
//     };
//     const sorted = fastSort(nums);
//     return sorted[k - 1];
// }

var findKthLargest = function (nums, k) {
    let heapSize = nums.length;
    buildMaxHeap(nums, heapSize); //构建大顶堆 大小为heapSize
    //大顶堆 前k-1个堆顶元素不断和数组的末尾元素交换 然后重新heapify堆顶元素
    //这个操作就是之前小顶堆出堆顶的操作，只不过现在是原地排序
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i);//交换堆顶和数组末尾元素
        --heapSize; //堆大小减1
        maxHeapify(nums, 0, heapSize);//重新heapify
    }
    return nums[0];//返回堆顶元素，就是第k大的元素

    function buildMaxHeap(nums, heapSize) {
        for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {//从第一个非叶子节点开始构建
            maxHeapify(nums, i, heapSize);
        }
    }
    // 从左向右，自上而下的调整节点
    function maxHeapify(nums, i, heapSize) {
        let l = i * 2 + 1;//左节点
        let r = i * 2 + 2;//右节点
        let largest = i;
        if (l < heapSize && nums[l] > nums[largest]) {
            largest = l;
        }
        if (r < heapSize && nums[r] > nums[largest]) {
            largest = r;
        }
        if (largest !== i) {
            swap(nums, i, largest); //找到左右节点中大的元素交换
            //递归交换后面的节点
            maxHeapify(nums, largest, heapSize);
        }
    }

    function swap(a, i, j) {//交换函数
        [a[i], a[j]] = [a[j], a[i]];
    }
};


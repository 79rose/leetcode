// 合并k组有序数组
// 使用非堆排序的方法
const mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    let mergedList = lists[0];
    for (let i = 1; i < lists.length; i++) {
        mergedList = mergeTwoLists(mergedList, lists[i]);
    }
    return mergedList;
}


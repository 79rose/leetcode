/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // function 1: 暴力解法
    // let pre = null;
    // let cur = head;
    // while (cur !== null) {
    //     const next = cur.next;
    //     cur.next = pre;
    //     pre = cur;
    //     cur = next;
    // }
    // return pre;
    // function 2: 递归解法
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
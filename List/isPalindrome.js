var isPalindrome = function (head) {
    let a = '', b = '';
    while (head != null) {
        a = a + head.val;
        b = head.val + b;
        head = head.next;
    }
    return a === b;
};

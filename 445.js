var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head; 
    head.next = null; 
    return newHead;
};

var addTwo = function(l1, l2, carry = 0) {
    if (l1 === null && l2 === null) { 
        return carry ? new ListNode(carry) : null; 
    }
    if (l1 === null) { 
        [l1, l2] = [l2, l1];
    }
    carry += l1.val + (l2 ? l2.val : 0); 
    l1.val = carry % 10; 
    l1.next = addTwo(l1.next, (l2 ? l2.next : null), Math.floor(carry / 10)); 
    return l1;
};

var addTwoNumbers = function(l1, l2) {
    l1 = reverseList(l1);
    l2 = reverseList(l2); 
    let l3 = addTwo(l1, l2);
    return reverseList(l3);
}

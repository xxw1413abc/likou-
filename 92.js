var reverseBetween = function(head, left, right) {
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let pre = dummyNode;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;
    let curr = rightNode.next;

    pre.next = null;
    rightNode.next = null;

    reverseLinkedList(leftNode);

    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;
};

const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}


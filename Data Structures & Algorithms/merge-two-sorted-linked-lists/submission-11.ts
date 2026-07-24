/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1 && !list2) return null;
        if (!list1 && list2) return list2;
        if (list1 && !list2) return list1;

        let head = null;
        let pointer = null;
        // let current = null

        let current1 = list1;
        let current2 = list2;

        while (current1 || current2) {
            console.log(`current1: ${current1}; current2: ${current2}`)
            if (!head) {
                console.log(`no head`)
                if (current1.val < current2.val) {
                    console.log(`pointer: current1`)
                    pointer = current1;
                    current1 = current1.next;
                } else {
                    console.log(`pointer: current2`)
                    pointer = current2;
                    current2 = current2.next;
                }
                head = pointer;
            } else if (!current1) {
                console.log(`no current1`)
                pointer.next = current2;
                pointer = pointer.next
                current2 = current2.next;
            } else if (!current2) {
                console.log(`no current2`)
                pointer.next = current1;
                pointer = pointer.next
                current1 = current1.next;
            } else if (current1.val < current2.val) {
                console.log(`using current 1`)
                pointer.next = current1;
                pointer = pointer.next
                current1 = current1.next;
            } else {
                console.log(`using current 2`)
                pointer.next = current2;
                pointer = pointer.next
                current2 = current2.next;
            }
        }
        return head;
    }
    // private compareAndIncrement(node1: ListNode, node2: ListNode)
}

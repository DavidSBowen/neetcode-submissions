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

        while (list1 || list2) {
            if (!head) {
                if (list1.val < list2.val) {
                    pointer = list1;
                    list1 = list1.next;
                } else {
                    pointer = list2;
                    list2 = list2.next;
                }
                head = pointer;
            } else if (!list1) {
                pointer.next = list2;
                pointer = pointer.next
                list2 = list2.next;
            } else if (!list2) {
                pointer.next = list1;
                pointer = pointer.next
                list1 = list1.next;
            } else if (list1.val < list2.val) {
                pointer.next = list1;
                pointer = pointer.next
                list1 = list1.next;
            } else {
                pointer.next = list2;
                pointer = pointer.next
                list2 = list2.next;
            }
        }
        return head;
    }
    // private compareAndIncrement(node1: ListNode, node2: ListNode)
}

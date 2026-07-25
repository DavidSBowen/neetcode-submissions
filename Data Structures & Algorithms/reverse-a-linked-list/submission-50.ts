class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null;

        let temp = head;

        // recursive:
        // navigate all the way in
        // this.next =

        while (head.next) {
            temp = this.reverseList(head.next);
            // node's next next = node
            head.next.next = head;
            head.next = null;
        }
        return temp;
    }
}

// 0 -> 1 -> 2

// 0 (0 -> 1 -> 2)
// 
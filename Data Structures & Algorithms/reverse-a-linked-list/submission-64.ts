class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null;

        // loop, recursive, find the new head (last item)
        // 

        let newHead = head

        while (head.next) {
            newHead = this.reverseList(head.next)
            head.next.next = head
            head.next = null
        }

        return newHead
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null

        let newHead = head

        while(head.next) {
            newHead = this.reverseList(head.next)
            head.next.next = head
            head.next = null
        }

        return newHead
    }
}

// 0 -> 1 -> 2

// 0 (0 -> 1 -> 2)
// 
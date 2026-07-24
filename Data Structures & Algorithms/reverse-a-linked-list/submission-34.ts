class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        // let current = head
        // let previous = null

        // while (current) {
        //     let next = current.next
        //     current.next = previous
        //     previous = current
        //     current = next
        // }

        // return previous

        if (!head) return null

        let newHead = head
        while (head.next) {
            newHead = this.reverseList(head.next)
            head.next.next = head
            head.next = null
        }

        return newHead
    }
}

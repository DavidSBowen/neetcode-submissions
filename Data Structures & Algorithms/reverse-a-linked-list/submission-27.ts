class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let current = head
        let previous = null

        while (current) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }
        return previous
    }
}

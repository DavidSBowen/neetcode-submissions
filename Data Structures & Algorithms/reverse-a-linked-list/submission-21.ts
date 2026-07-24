class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

        if (!head) return null
        
        let current: ListNode | null = head
        let previous: ListNode | null = null

        while (current) {
            let next = current.next
            current.next = previous
            previous = current
            current = next

        }

        return previous
    }
}

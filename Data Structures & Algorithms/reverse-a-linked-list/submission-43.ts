class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        // 1 -> 2 -> 3 -> null
        // 1 current
        // null previous
        // loop while current
            // 2 actual next 
            // current.next = previous
            // 1 -> null
            // previous = current
            // 1 (1 -> null)
            // current = next
            // 2 (2 -> null)
            // current = 2 (2 -> null); previous = 1 (1 -> null)
                // 3 actual next
                // current.next = previous
                // 1 -> 2 (2 -> 1 -> null)
                // previous = current
                // 2 (2 -> 1 -> null)
                // current = next
                // 3
                // current = 3 (3 -> null); previous = 2 (2 -> 1 -> null)
                    // null actual next
                    // current.next = previous
                    // 3 -> 2 (2 -> 1 -> null)
                    // previous = current
                    // 3 (3 -> 2 -> 1 -> null)
                    // current = actual next
                    // null
        // return previous (3)

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

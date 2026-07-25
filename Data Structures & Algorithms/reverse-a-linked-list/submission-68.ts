class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null;

        let newNode = head;

        while (head.next) {
            newNode = this.reverseList(head.next);
            head.next.next = head;
            head.next = null;
        }
        // iterate over until we get to the final node - that's our return node

        // change the next node to point to this node
        // change this node to point to nothing

        return newNode;
    }
}

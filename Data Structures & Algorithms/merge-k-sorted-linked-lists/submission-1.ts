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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode { // [LN(1), LN(1), LN(3)]

        if (lists.length === 0) return null
        let headDummy = new ListNode()
        let runningNode = headDummy



        // all must operate while there is still any LN.next

        let cont: boolean = true

        while (cont) {
            let some: boolean = false
            for(let i = 0; i < lists.length; i++) {
                if (lists[i]) {
                    some = true
                }
            }
            if (some) {
                runningNode.next = this.findSmallest(lists)
                runningNode = runningNode.next
            } else {
                cont = false
            }
        }

        return headDummy.next
        
    }

    findSmallest(lists: ListNode[]): ListNode {
        // for every list node:
            // find the lowest value
            // put it as next onto dummy
            // move that listnode to the next

        // [LN(1), LN(1), LN(3)]
        // [null, LN(1), LN(3)]
        let smallestNodeIndex: number = -1
        let smallestNodeValue: number
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] && (smallestNodeIndex < 0)) {
                smallestNodeIndex = i
                smallestNodeValue = lists[i].val
            } else {
                if (lists[i] && (lists[i].val < smallestNodeValue)) {
                    smallestNodeIndex = i
                    smallestNodeValue = lists[i].val
                }
            }
        }
        let dummy = lists[smallestNodeIndex]
        lists[smallestNodeIndex] = lists[smallestNodeIndex].next
        return dummy
    }
}

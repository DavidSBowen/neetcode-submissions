/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */

    getSmallest(root: TreeNode): TreeNode {
        if (!root) return null
        while (root.left) {
            root = root.left
        }
        return root
    }

    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if (!root) return null;

        // searching for key
        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        }
        // key found 
        else {
            // no children, return null
            if (!root.left && !root.right) {
                return null
            } 
            // no left child, but right child
            else if (!root.left && root.right) {
                return root.right
            }
            // no right child, but left child
            else if (root.left && !root.right) {
                return root.left
            }
            // two children
            console.log(`key: ${key}; two children`)
            const smallest = this.getSmallest(root.right)
            root.val = smallest.val
            root.right = this.deleteNode(root.right, smallest.val)
        }

        return root
    }
}

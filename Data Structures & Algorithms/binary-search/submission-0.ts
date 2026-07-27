class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    //                 0 1 2 3 4 5
    // Input: nums = [-1,0,2,4,6,8], target = 4 (value, not index)
    //                 L   M     R

    //                 0 1 2 3 4 5
    // Input: nums = [-1,0,2,4,6,8], target = 5
    //                       L M R

    //                 0 1 2 3 4 5
    // Input: nums = [-1,0,2,4,6,8], target = 5
    //                       L
    //                       R
    //                       M

    //                 0 1 2 3 4 5
    // Input: nums = [-1,0,2,4,6,8], target = 5
    //                       R L
    //                       M

    // Output: 3

    search(nums: number[], target: number): number {
        let L = 0
        let R = nums.length - 1

        while (L <= R) {
            let M = Math.floor((L + R) / 2)
            
            if (nums[M] < target) {
                L = M + 1
            } else if (nums[M] > target) {
                R = M - 1
            } else {
                return M
            }

        }
        return -1
    }
}

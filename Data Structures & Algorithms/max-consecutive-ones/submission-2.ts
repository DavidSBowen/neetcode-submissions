class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxConsecutive = 0
        let currentConsecutive = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                currentConsecutive++
            } else {
                if (currentConsecutive > maxConsecutive) {
                    maxConsecutive = currentConsecutive
                }
                currentConsecutive = 0
            }
        }
        if (currentConsecutive > maxConsecutive) {maxConsecutive = currentConsecutive}
        return maxConsecutive
    }
}

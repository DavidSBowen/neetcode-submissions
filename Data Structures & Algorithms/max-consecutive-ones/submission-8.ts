class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxConsecutive = 0;
        let currentConsecutive = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                currentConsecutive++;
                if (currentConsecutive > maxConsecutive) {
                    maxConsecutive = currentConsecutive;
                }
            } else {
                currentConsecutive = 0;
            }
        }
        return maxConsecutive;
    }
}

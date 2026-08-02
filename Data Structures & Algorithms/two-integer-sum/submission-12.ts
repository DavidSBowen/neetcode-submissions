class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
 
        // object
        const seen: Record<number,number> = {};
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i]
            const diff = target - n

            if (diff in seen) {
                return [seen[diff], i]
            } else {
                seen[n] = i
            }
        }
        return [];
    }
}

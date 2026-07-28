class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash = []
        for (let i = 0; i < nums.length; i++) {
            if (hash.includes(nums[i])) {
                return true
            } else {
                hash.push(nums[i])
            }
        }
        return false
    }
}

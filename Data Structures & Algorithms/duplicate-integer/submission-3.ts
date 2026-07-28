class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash = new Set<number>()
        for (const num of nums) {
            if (hash.has(num)) {
                return true
            } else {
                hash.add(num)
            }
        }
        return false
    }
}

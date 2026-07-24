class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        if (nums.length == 0) return nums
        const ans = nums.concat(nums)
        return ans
    }
}

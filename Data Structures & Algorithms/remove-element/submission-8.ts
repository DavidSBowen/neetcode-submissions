class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // let index = 0
        // while (index < nums.length) {
        //     if (nums[index] == val) {
        //         nums.splice(index, 1);
        //     } else index++
        // }
        // return nums.length;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                nums.splice(i,1)
                i--
            }
        }
        return nums.length
    }
}

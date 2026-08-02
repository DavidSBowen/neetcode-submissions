class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // try to only through nums once
        // create a new hash map
        // go through each item in nums
        // if hash is empty, push (always push first) (key: item -> value: index)
        // if hash not empty, try adding current item to each item (key) in nums to see if it equals 7
        // if yes, then return hash value + current index
        // if none add to 7, push (key: item -> value: index)
        const map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            if (map.size === 0) {
                map.set(nums[i], i);
            } else {
                for (const [k, v] of map) {
                    if (k + nums[i] === target) {
                        return [v, i];
                    }
                }
                map.set(nums[i], i);
            }
        }
        return [];
    }
}

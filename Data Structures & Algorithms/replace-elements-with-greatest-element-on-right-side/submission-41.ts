class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    replaceElements(arr: number[]): number[] {
        let largest = 0
        for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] > largest) {largest = arr[j]}
            }
            arr[i] = largest
            largest = 0
        }
        arr[arr.length-1] = -1
        return arr
    }
}

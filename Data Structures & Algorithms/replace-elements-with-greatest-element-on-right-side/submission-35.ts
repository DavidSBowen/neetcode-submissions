class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    replaceElements(arr: number[]): number[] {
        let largest = 0
        for (let i = 0; i < arr.length; i++) { // i = 1
            for (let j = i+1; j < arr.length; j++) { // j = 2
                if (arr[j] > largest) {largest = arr[j]}
            }
            arr[i] = largest
            largest = 0
        }
        arr[arr.length-1] = -1
        return arr
    }
}

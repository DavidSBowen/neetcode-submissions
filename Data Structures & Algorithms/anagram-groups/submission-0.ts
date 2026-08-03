class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const structure: Record<string, string[]> = {}; // string => index
        strs.forEach((str) => {
            const sorted = str.split("").sort().join("");
            if (!(sorted in structure)) {
                structure[sorted] = [];
            }
            structure[sorted].push(str);
        });
        const holder = []
        for (const k in structure) {
            holder.push(structure[k])
        }
        return holder;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const mapS: Map<string, number> = new Map();
        for (const letter of s) {
            mapS.set(letter, (mapS.get(letter) || 0) + 1);
        }
        const mapT: Map<string, number> = new Map();
        for (const letter of t) {
            mapT.set(letter, (mapT.get(letter) || 0) + 1);
        }

        console.log(`mapS`, mapS);
        console.log(`mapT`, mapT);

        for (const [kS, vS] of mapS) {
            const vT: number | undefined = mapT.get(kS);
            if (!vT) return false;
            console.log(`vS:`, vS);
            console.log(`vT:`, vT);
            if (vT !== vS) return false;
        }
        return true;
    }
}

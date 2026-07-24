class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    private opening: Set<string> = new Set(["(", "[", "{"]);
    private closing: Map<string, string> = new Map([[")", "("], ["]", "["], ["}", "{"]]);
    isValid(s: string): boolean {
        const stack: string[] = [];

        for (const c of s) {
            if (this.opening.has(c)) {
                stack.push(c);
            } else {
                if (this.closing.get(c) !== stack.at(-1)) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}

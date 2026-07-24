class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 != 0) return false;
        if (s.length == 0) return true;

        const arr = s.split("");

        const holder = [];

        const openParen = "(";
        const closeParen = ")";
        const openBracket = "[";
        const closeBracket = "]";
        const openBrace = "{";
        const closeBrace = "}";

        const openers = [openParen, openBracket, openBrace];
        const closers = [closeParen, closeBracket, closeBrace];

        if (!arr.some(item => openers.includes(item)) || !arr.some(item => closers.includes(item))) return false

        let isValid = true

        for (let i = 0; i < arr.length; i++) {
            if (openers.includes(arr[i])) {
                holder.push(arr[i]);
            } else if (closers.includes(arr[i])) {
                const popped = holder.pop();
                if (popped === openParen && arr[i] === closeParen || (popped === openBracket && arr[i] === closeBracket) || (popped === openBrace && arr[i] === closeBrace)) {
                    continue
                } else {
                    return false
                }
            } else {
                console.warn("unknown symbol");
                return false;
            }
        }

        if (holder.length != 0) return false
        return isValid
    }
}

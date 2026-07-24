class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let runningScores = []
        let runningScoresIndex = 0
        for (let i = 0; i < operations.length; i++) {
            const parsed = +operations[i]
            console.log(parsed)
            if (!Number.isNaN(parsed)) {
                runningScores.push(+operations[i])
                runningScoresIndex++
            } else if (operations[i] == '+') {
                runningScores.push(+runningScores[runningScoresIndex-1] + +runningScores[runningScoresIndex-2])
                runningScoresIndex++
            } else if (operations[i] == 'D') {
                runningScores.push(+runningScores[runningScoresIndex-1] * 2)
                runningScoresIndex++
            } else if (operations[i] == 'C') {
                runningScores.pop()
                runningScoresIndex--
            }

            console.log(`runningScores: ${runningScores}`)
        }
        let sum = 0
        for (let i = 0; i < runningScores.length; i++) {
            sum += +runningScores[i]
            console.log(`sum: ${sum}`)
        }
        return sum
    }
}

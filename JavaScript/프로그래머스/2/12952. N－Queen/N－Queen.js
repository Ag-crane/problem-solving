function solution(n) {
    let result = 0
    const board = Array(n).fill(-1)

    function isSafe(row, col) {
        for (let i=0; i<row; i++) {
            if (board[i]===col) return false // 열 체크
            if (row - i === Math.abs(col - board[i])) return false // 대각선 체크
        }
        return true
    }

    function backtrack(row) {
        if (row===n) {
            result++
            return
        }
        for (let col=0; col<n; col++) {
            if (isSafe(row, col)) {
                board[row] = col
                backtrack(row + 1)
            }
        }
    }

    backtrack(0)
    
    return result
}
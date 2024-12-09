function solution(board, moves) {
    let n = board.length
    let newBoard = []
    for (let c = 0; c<n; c++) {
        newBoard.push([])
        for (let r = n-1; r>=0; r--) {
            if (board[r][c] !== 0) newBoard[c].push(board[r][c])
        }
    }
    
    var answer = 0
    let stack = []
    for (const move of moves) {
        if (newBoard[move-1].length > 0) {
            let popItem = newBoard[move-1].pop()
            stack.push(popItem)
            if (stack.length >= 2 && stack.at(-1) === stack.at(-2)) {
                stack.length -= 2
                answer += 2
            }
        }
    }
        
    return answer;
}
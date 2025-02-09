function solution(board, moves) {
    const lanes = Array.from({length: board[0].length}, _ => [])
    for (let i=board.length-1; i>=0; i--) {
        for (let j=0; j<board[0].length; j++) {
            if (board[i][j]!==0) lanes[j].push(board[i][j])
        }
    }
    const stack = []
    let result = 0
    for (const move of moves) {
        if (lanes[move-1].length>0) {
            const popItem = lanes[move-1].pop()
            const top = stack.at(-1)
            if (popItem===top) {
                stack.pop()
                result += 2
            } else stack.push(popItem)
        }
    }
    
    return result
}
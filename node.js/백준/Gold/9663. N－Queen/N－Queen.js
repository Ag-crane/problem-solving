const N = +require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString()

const board = Array(N).fill(-1) // 1차원 배열로 저장. index가 row, 값이 col
const diagonalL = Array(N*2).fill(false)
const diagonalR = Array(N*2).fill(false)

let result = 0

function backtrack(row) {
    if (row === N) {
        result++
        return
    }

    for (let col=0; col<N; col++) {
        if (board[row] !== -1) continue // 행 체크
        if (board.some(x => x===col)) continue // 열 체크
        if (diagonalL[row - col + N] || diagonalR[row + col]) continue
        board[row] = col
        diagonalL[row - col + N] = true
        diagonalR[row + col] = true
        backtrack(row + 1)
        board[row] = -1
        diagonalL[row - col + N] = false
        diagonalR[row + col] = false
    }
}

backtrack(0)

console.log(result)
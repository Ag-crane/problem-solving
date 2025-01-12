const N = +require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString()

const diagonalL = Array(N*2).fill(false)
const diagonalR = Array(N*2).fill(false)
const isColOccupied = Array(N).fill(false)
let result = 0

function backtrack(row) {
    if (row === N) {
        result++
        return
    }

    for (let col=0; col<N; col++) {
        if (isColOccupied[col]) continue // 열 체크
        if (diagonalL[row - col + N] || diagonalR[row + col]) continue // 대각선 체크
        isColOccupied[col] = true
        diagonalL[row - col + N] = true
        diagonalR[row + col] = true
        backtrack(row + 1)
        isColOccupied[col] = false
        diagonalL[row - col + N] = false
        diagonalR[row + col] = false
    }
}

backtrack(0)
console.log(result)
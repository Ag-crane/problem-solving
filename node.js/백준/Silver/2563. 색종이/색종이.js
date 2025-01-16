const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().split(/\r?\n/)

const N = +input[0]
const board = Array.from({length: 100}, _ => Array(100).fill(0))

for (let i=1; i<input.length; i++) {
    const [X, Y] = input[i].split(' ').map(Number)
    for (let j=0; j<10; j++) {
        for (let k=0; k<10; k++) {
            if (board[X+j][Y+k]===0) board[X+j][Y+k] = 1
        }
    }
}

let sum=0
for (let j=0; j<100; j++) {
    for (let k=0; k<100; k++) {
        if (board[j][k]===1) sum++
    }
}

console.log(sum)


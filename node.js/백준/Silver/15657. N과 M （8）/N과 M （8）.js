const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().split(/\r?\n/)

const [N, M] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b)

function backtrack(depth, cur, start) {
    
    if (depth===M) {
        console.log(...cur)
        return
    }

    for (let i=start; i<N; i++) {
        cur.push(numbers[i])
        backtrack(depth+1, cur, i)
        cur.pop()
    }
}

backtrack(0, [], 0)
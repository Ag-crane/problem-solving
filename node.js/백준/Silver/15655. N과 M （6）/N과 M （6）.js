const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(/\r?\n/)
const [N, M] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => (a - b))

const result = []
const cur = []

function backtrack(depth) {
    if (depth===M) {
        result.push(cur.join(' '))
        return
    }

    for (let i=0; i<N; i++) {
        if (cur.length===0 || cur.at(-1) < arr[i]) {
            cur.push(arr[i])
            backtrack(depth + 1)
            cur.pop()
        }
    }
}

backtrack(0)

console.log(result.join('\n'))
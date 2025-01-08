const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim()
const [N, M] = input.split(' ').map(Number)

const result = []

function backtrack(cur, start) {
    
    if (cur.length===M) {
        result.push([...cur])
        return
    }

    for (let i=start; i<N+1; i++){
        cur.push(i)
        backtrack(cur, i)
        cur.pop()
    }
}

backtrack([], 1)

console.log(result.map(arr => arr.join(' ')).join('\n'))